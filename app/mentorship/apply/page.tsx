"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { validateForm, validateField } from "@/utils/validation";
import PhoneInput from "@/components/PhoneInput";

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "",
    experience: "",
    goals: "",
    timezone: "",
    availability: "",
  });
  const [countryCode, setCountryCode] = useState("+1");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { toast, ToastContainer } = useToast();

  const requiredFields = ["name", "email", "phone", "track", "experience", "goals", "timezone", "availability"];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Validate field on blur
    const error = validateField(field, formData[field as keyof typeof formData], true);
    if (error) {
      setErrors(prev => ({ ...prev, [field]: error.message }));
    } else {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: "" }));
    }
  };

  const handleCountryCodeChange = (code: string) => {
    setCountryCode(code);
  };

  const url = process.env.NEXT_PUBLIC_FORMSPREE_MENTORSHIP_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const validation = validateForm(formData, requiredFields);
    
    if (!validation.isValid) {
      const newErrors: Record<string, string> = {};
      validation.errors.forEach(error => {
        newErrors[error.field] = error.message;
      });
      setErrors(newErrors);
      
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Submitting application...",
      description: "Please wait while your application is being sent.",
    });

    try {
      // Create FormData with all the form data from state
      const data = new FormData();
      data.append("form_type", "mentorship");
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", `${countryCode}${formData.phone}`);
      data.append("track", formData.track);
      data.append("experience", formData.experience);
      data.append("goals", formData.goals);
      data.append("timezone", formData.timezone);
      data.append("availability", formData.availability);

      const response = await fetch(
        url || "https://formspree.io/f/YOUR_MENTORSHIP_FORM_ID",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        toast({
          title: "Application Sent!",
          description:
            "Your mentorship application has been sent successfully. We'll be in touch soon!",
          variant: "success",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          track: "",
          experience: "",
          goals: "",
          timezone: "",
          availability: "",
        });
        setErrors({});
        setTouched({});
      } else {
        const result = await response.json();
        toast({
          title: "Submission Failed",
          description: result.errors
            ? result.errors
                .map((err: { message: string }) => err.message)
                .join(", ")
            : "There was an issue sending your application. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <ToastContainer />
      <div className="text-center mb-8 sm:mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6"
        >
          Apply for <span className="text-blue-600">Web3 Mentorship</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg px-2"
        >
          Complete this form to start your journey. We&apos;ll match you with
          the perfect mentor based on your goals.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8 xl:p-10 max-w-3xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur("name")}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your full name"
            />
            {errors.name && touched.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && touched.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number *
            </label>
            <PhoneInput
              value={formData.phone}
              onChange={handlePhoneChange}
              onCountryCodeChange={handleCountryCodeChange}
              countryCode={countryCode}
              placeholder="Enter your phone number"
              required
              error={errors.phone && touched.phone ? errors.phone : undefined}
            />
          </div>

          <div>
            <label
              htmlFor="track"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Preferred Mentorship Track *
            </label>
            <select
              id="track"
              name="track"
              value={formData.track}
              onChange={handleChange}
              onBlur={() => handleBlur("track")}
              required
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black outline-none ${
                errors.track ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a track</option>
              <option value="Web3 Fundamentals">Web3 Fundamentals</option>
              <option value="Smart Contract Development">
                Smart Contract Development
              </option>
              <option value="DeFi & dApp Building">DeFi & dApp Building</option>
            </select>
            {errors.track && touched.track && (
              <p className="mt-1 text-sm text-red-600">{errors.track}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Current Web3 Experience Level *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <div key={level} className="flex items-center">
                  <input
                    id={`experience-${level.toLowerCase()}`}
                    name="experience"
                    type="radio"
                    value={level}
                    checked={formData.experience === level}
                    onChange={handleChange}
                    onBlur={() => handleBlur("experience")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 outline-none"
                  />
                  <label
                    htmlFor={`experience-${level.toLowerCase()}`}
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {level}
                  </label>
                </div>
              ))}
            </div>
            {errors.experience && touched.experience && (
              <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="goals"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Learning Goals *
            </label>
            <textarea
              id="goals"
              name="goals"
              value={formData.goals}
              onChange={handleChange}
              onBlur={() => handleBlur("goals")}
              required
              rows={4}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black outline-none ${
                errors.goals ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="What do you hope to achieve through this mentorship? (Minimum 10 characters)"
            />
            {errors.goals && touched.goals && (
              <p className="mt-1 text-sm text-red-600">{errors.goals}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="timezone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Timezone *
            </label>
            <input
              type="text"
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              onBlur={() => handleBlur("timezone")}
              required
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black outline-none ${
                errors.timezone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g. GMT+1, EST, UTC, etc."
            />
            {errors.timezone && touched.timezone && (
              <p className="mt-1 text-sm text-red-600">{errors.timezone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Weekly Availability (Hours) *
            </label>
            <input
              type="number"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              onBlur={() => handleBlur("availability")}
              required
              min="1"
              max="168"
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black outline-none ${
                errors.availability ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="How many hours per week can you dedicate?"
            />
            {errors.availability && touched.availability && (
              <p className="mt-1 text-sm text-red-600">{errors.availability}</p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Submit Application
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            By applying, you agree to our{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </motion.div>

      <motion.section
        className="mt-16 bg-blue-50 rounded-xl p-8 sm:p-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          What Happens Next?
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "✉️",
                title: "Application Review",
                description:
                  "We'll review your application within 3 business days",
              },
              {
                icon: "🤝",
                title: "Mentor Matching",
                description:
                  "We'll match you with the best mentor for your goals",
              },
              {
                icon: "🎉",
                title: "Onboarding",
                description:
                  "Start your mentorship journey with a kickoff call",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ApplyPage;
