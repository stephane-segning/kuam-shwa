import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { render } from '@react-email/render';
import ContactFormEmail from '@/emails/ContactFormEmail';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('A valid email is required.'),
  phone: z
    .string()
    .regex(
      /^(\+?\d{1,3}[- .]?)?(\(?\d{1,4}\)?[- .]?)?[\d\- .]{5,15}$/,
      'A valid phone number is required.'
    ),
  message: z.string().min(5, 'Message must be at least 5 characters.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

async function sendEmail(data: ContactFormData) {
  const {
    EMAIL_HOST,
    EMAIL_PORT,
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_FROM,
    EMAIL_TO,
  } = process.env;

  if (
    !EMAIL_HOST ||
    !EMAIL_PORT ||
    !EMAIL_USER ||
    !EMAIL_PASS ||
    !EMAIL_FROM ||
    !EMAIL_TO
  ) {
    throw new Error('Email environment variables are not properly configured.');
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: Number(EMAIL_PORT) === 465,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const emailHtml = await render(<ContactFormEmail {...data} />);

  const mailOptions = {
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: 'New Contact Form Submission',
    html: emailHtml,
    replyTo: data.email,
  };

  return transporter.sendMail(mailOptions);
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parseResult = contactSchema.safeParse(json);

    if (!parseResult.success) {
      const validationErrors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, errors: validationErrors },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    await sendEmail(data);

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully.' },
      { status: 200 }
    );
  } catch (error: any) {
    if (
      error?.message &&
      error.message.includes('Email environment variables')
    ) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ||
          'An unexpected error occurred while sending your message.',
      },
      { status: 500 }
    );
  }
}