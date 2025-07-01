"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// TypeScript interface for form data
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Name is required."),
    email: Yup.string()
      .trim()
      .email("Invalid email address.")
      .required("Email is required."),
    phone: Yup.string()
      .trim()
      .matches(/^\+?\d{7,15}$/, "Invalid phone number.")
      .required("Phone is required."),
    message: Yup.string().trim().required("Message is required."),
  });

  const formik = useFormik<ContactFormData>({
    initialValues: initialFormData,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setSuccess(null);
      setSubmitError(null);
      setLoading(true);

      try {
        // Simulate API call to /api/contact
        // await fetch("/api/contact", { ... })
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setSuccess("Your message has been sent!");
        resetForm();
      } catch (err) {
        setSubmitError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="card w-full bg-base-100 text-primary-content shadow-xl md:my-8 rounded-none md:rounded-2xl">
      <div className="card-body p-10 py-8">
        <h2 className="card-title text-2xl font-bold text-center mb-6">Send us a message</h2>
        <form onSubmit={formik.handleSubmit} noValidate>
          <div className="form-control mb-5">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              {...formik.getFieldProps("name")}
              className={`input input-bordered w-full ${
                formik.touched.name && formik.errors.name ? "input-error" : ""
              }`}
              disabled={loading}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-error text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          
          <div className="form-control mb-5">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...formik.getFieldProps("email")}
              className={`input input-bordered w-full ${
                formik.touched.email && formik.errors.email ? "input-error" : ""
              }`}
              disabled={loading}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-error text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          
          <div className="form-control mb-5">
            <label htmlFor="phone" className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              {...formik.getFieldProps("phone")}
              className={`input input-bordered w-full ${
                formik.touched.phone && formik.errors.phone ? "input-error" : ""
              }`}
              disabled={loading}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-error text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>
          
          <div className="form-control mb-5">
            <label htmlFor="message" className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              id="message"
              rows={5}
              {...formik.getFieldProps("message")}
              className={`textarea textarea-bordered w-full resize-none ${
                formik.touched.message && formik.errors.message ? "textarea-error" : ""
              }`}
              disabled={loading}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-error text-sm mt-1">{formik.errors.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            className={`btn btn-xl btn-primary w-full ${loading ? "btn-disabled" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {success && (
            <div className="alert alert-success mt-4 mb-4 text-center font-medium">
              {success}
            </div>
          )}
          {submitError && (
            <div className="alert alert-error mt-4 mb-4 text-center font-medium">
              {submitError}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
