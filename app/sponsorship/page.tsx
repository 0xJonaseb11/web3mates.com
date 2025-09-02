"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaRegLightbulb,
  FaHandshake,
} from "react-icons/fa";
import { MdCelebration } from "react-icons/md";
import React from "react";

const steps = [
  "Sponsor Details",
  "Motivation",
  "Sponsorship Type",
  "Additional Info",
  "Review & Submit",
];

export default function SponsorshipPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<{
    name: string;
    company: string;
    email: string;
    motivation: string;
    type: string[];
    additional: string;
  }>({
    name: "",
    company: "",
    email: "",
    motivation: "",
    type: [],
    additional: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState<{
    name: boolean;
    company: boolean;
    email: boolean;
    motivation: boolean;
    type: boolean;
  }>({
    name: false,
    company: false,
    email: false,
    motivation: false,
    type: false,
  });
  const { toast, ToastContainer } = useToast();

  const url = process.env.NEXT_PUBLIC_FORMSPREE_SPONSORSHIP_URL;

  const sponsorshipTypes = [
    "Community Events",
    "Hackathons",
    "Workshops",
    "Mentorship Programs",
    "Other",
  ];

  const nameCompanyPattern = /^[A-Za-z .,'-]{2,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isSponsorDetailsValid =
    nameCompanyPattern.test(form.name.trim()) &&
    nameCompanyPattern.test(form.company.trim()) &&
    emailPattern.test(form.email.trim());
  const isMotivationValid = form.motivation.trim().length >= 10;
  const isTypeValid = form.type.length > 0;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({
        ...prev,
        type: checked
          ? [...prev.type, value]
          : prev.type.filter((t) => t !== value),
      }));
      setTouched((prev) => ({ ...prev, type: true }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    toast({
      title: "Submitting sponsorship inquiry...",
      description: "Please wait while we process your submission.",
    });

    try {
      // Create FormData with all the form data from state
      const data = new FormData();
      data.append("form_type", "sponsorship");
      data.append("name", form.name);
      data.append("company", form.company);
      data.append("email", form.email);
      data.append("motivation", form.motivation);
      data.append("additional", form.additional);
      
      // Add each sponsorship type
      form.type.forEach((type) => {
        data.append("type", type);
      });

      const response = await fetch(
        url || "https://formspree.io/f/YOUR_SPONSORSHIP_FORM_ID",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSuccess(true);
        toast({
          title: "Thank you!",
          description:
            "Your sponsorship inquiry has been received. We'll be in touch soon!",
          variant: "success",
        });
        setForm({
          name: "",
          company: "",
          email: "",
          motivation: "",
          type: [],
          additional: "",
        });
      } else {
        const result = await response.json();
        setError(
          "There was a problem submitting your sponsorship inquiry. Please try again."
        );
        toast({
          title: "Submission Failed",
          description: result.errors
            ? result.errors
                .map((err: { message: string }) => err.message)
                .join(", ")
            : "There was a problem submitting your sponsorship inquiry. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError(
        "There was a problem submitting your sponsorship inquiry. Please try again."
      );
      toast({
        title: "Submission Failed",
        description:
          "There was a problem submitting your sponsorship inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  function next() {
    if (step === 0 && !isSponsorDetailsValid) {
      setTouched({
        name: true,
        company: true,
        email: true,
        motivation: true,
        type: true,
      });
      return;
    }
    if (step === 1 && !isMotivationValid) return;
    if (step === 2 && !isTypeValid) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function prev() {
    setStep((s) => Math.max(s - 1, 0));
  }

  return (
            <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center py-12 px-2 sm:px-6">
      <div className="w-full max-w-4xl mx-auto relative">
        {/* Sponsor Illustration */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-2"
        >
          <FaHandshake className="text-[#0066FF] text-5xl drop-shadow-lg bg-white/70 rounded-full p-2 border border-blue-100" />
        </motion.div>
        {/* Glassmorphism Card */}
        <motion.div
          className="w-full rounded-3xl shadow-2xl border border-blue-100 bg-white/70 backdrop-blur-lg px-4 sm:px-10 py-10 sm:py-14"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-[#0B1C39] tracking-tight">
            Become a <span className="text-blue-700">Sponsor</span>
          </h1>
          <p className="text-center text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Support the Web3 Mates community and help us grow!
          </p>
          {/* Stepper */}
          <div className="flex items-center justify-center mb-10 gap-2 sm:gap-4">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center">
                <motion.div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-md border-2 transition-all duration-300 ${i === step ? "bg-gradient-to-br from-[#0066FF] to-[#0047CC] border-blue-400 scale-110" : i < step ? "bg-green-400 border-green-300" : "bg-gray-300 border-gray-200"}`}
                  animate={i === step ? { scale: 1.15 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {i + 1}
                </motion.div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-8 sm:w-12 h-1 ${i < step ? "bg-green-400" : "bg-gray-200"} rounded-full mx-1 sm:mx-2 transition-all duration-300`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          {/* Form */}
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center flex flex-col items-center justify-center min-h-[300px]"
              >
                <MdCelebration className="text-green-500 text-6xl mb-4 animate-bounce" />
                <h2 className="text-2xl font-bold text-green-600 mb-2">
                  Thank you!
                </h2>
                <p className="mb-2">
                  Your sponsorship inquiry has been received.
                  <br />
                  We&apos;ll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <input type="hidden" name="form_type" value="sponsorship" />
                {step === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                  >
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 text-lg pointer-events-none" />
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full pl-10 pr-3 py-3 border rounded-lg bg-white/80 focus:outline-none focus:border-[#0066FF] text-black ${touched.name && !nameCompanyPattern.test(form.name.trim()) ? "border-red-500" : ""}`}
                        placeholder="Full Name"
                      />
                      {touched.name &&
                        !nameCompanyPattern.test(form.name.trim()) && (
                          <div className="text-red-500 text-xs mt-1">
                            Enter a valid name (letters, spaces, min 2 chars).
                          </div>
                        )}
                    </div>
                    <div className="relative">
                      <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 text-lg pointer-events-none" />
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full pl-10 pr-3 py-3 border rounded-lg bg-white/80 focus:outline-none focus:border-[#0066FF] text-black ${touched.company && !nameCompanyPattern.test(form.company.trim()) ? "border-red-500" : ""}`}
                        placeholder="Company/Organization"
                      />
                      {touched.company &&
                        !nameCompanyPattern.test(form.company.trim()) && (
                          <div className="text-red-500 text-xs mt-1">
                            Enter a valid company name (letters, spaces, min 2
                            chars).
                          </div>
                        )}
                    </div>
                    <div className="relative col-span-1 sm:col-span-2">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-300 text-lg pointer-events-none" />
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full pl-10 pr-3 py-3 border rounded-lg bg-white/80 focus:outline-none focus:border-[#0066FF] text-black ${touched.email && !emailPattern.test(form.email.trim()) ? "border-red-500" : ""}`}
                        placeholder="Email Address"
                      />
                      {touched.email &&
                        !emailPattern.test(form.email.trim()) && (
                          <div className="text-red-500 text-xs mt-1">
                            Enter a valid email address.
                          </div>
                        )}
                    </div>
                  </motion.div>
                )}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative"
                  >
                    <FaRegLightbulb className="absolute left-3 top-4 text-blue-300 text-lg pointer-events-none" />
                    <textarea
                      name="motivation"
                      value={form.motivation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows={4}
                      className={`w-full pl-10 pr-3 py-3 border rounded-lg bg-white/80 focus:outline-none focus:border-[#0066FF] text-black ${touched.motivation && form.motivation.trim().length < 10 ? "border-red-500" : ""}`}
                      placeholder="Why do you want to sponsor Web3 Mates? (min 10 chars)"
                    />
                    {touched.motivation &&
                      form.motivation.trim().length < 10 && (
                        <div className="text-red-500 text-xs mt-1">
                          Please provide at least 10 characters.
                        </div>
                      )}
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <label className="block mb-2 font-medium text-[#0B1C39]">
                      What would you like to sponsor?
                    </label>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {sponsorshipTypes.map((type) => (
                        <label
                          key={type}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 ${form.type.includes(type) ? "bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white border-blue-400 shadow" : "bg-white/80 border-gray-300 text-[#0B1C39] hover:border-blue-300"}`}
                        >
                          <input
                            type="checkbox"
                            name="type"
                            value={type}
                            checked={form.type.includes(type)}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="accent-[#0066FF] hidden"
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                    {touched.type && form.type.length === 0 && (
                      <div className="text-red-500 text-xs mb-2">
                        At least one sponsorship type is required.
                      </div>
                    )}
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className=" relative"
                  >
                    <textarea
                      name="additional"
                      value={form.additional}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={3}
                      className="w-full pl-4 pr-3 py-3 border rounded-lg bg-white/80 focus:outline-none focus:border-[#0066FF] text-black"
                      placeholder="Any additional information? (optional)"
                    />
                  </motion.div>
                )}
                {step === 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="font-bold mb-2 text-slate-600">
                      Review your submission:
                    </h3>
                    <ul className="mb-4 text-sm">
                      <li className="text-slate-500">
                        <b>Name:</b> {form.name}
                      </li>
                      <li className="text-slate-500">
                        <b>Company:</b> {form.company}
                      </li>
                      <li className="text-slate-500">
                        <b>Email:</b> {form.email}
                      </li>
                      <li className="text-slate-500">
                        <b>Motivation:</b> {form.motivation}
                      </li>
                      <li className="text-slate-500">
                        <b>Sponsorship Type:</b> {form.type.join(", ")}
                      </li>
                      <li className="text-slate-500">
                        <b>Additional Info:</b> {form.additional}
                      </li>
                    </ul>
                  </motion.div>
                )}
                {error && <div className="text-red-600 mb-4">{error}</div>}
                <div className="flex justify-between mt-8 gap-4">
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={prev}
                      className="px-6 py-3 rounded-full bg-slate-400 hover:bg-gray-300 font-medium shadow"
                    >
                      Back
                    </button>
                  )}
                  {step < steps.length - 1 && (
                    <button
                      type="button"
                      onClick={next}
                      className="ml-auto px-8 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#0047CC] text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200 disabled:opacity-60"
                      disabled={
                        (step === 0 && !isSponsorDetailsValid) ||
                        (step === 1 && !isMotivationValid) ||
                        (step === 2 && !isTypeValid)
                      }
                    >
                      Next
                    </button>
                  )}
                  {step === steps.length - 1 && (
                    <button
                      type="submit"
                      disabled={submitting}
                      className="ml-auto px-8 py-3 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-500 transition-all duration-200 disabled:opacity-60 flex items-center gap-2"
                    >
                      {submitting && (
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                      )}
                      {submitting ? "Submitting..." : "Submit"}
                    </button>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
}
