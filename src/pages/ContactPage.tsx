import { useState } from "react";
import { HeroVideoOverlay } from "@/components/HeroVideoOverlay";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    company: "",
    subject: "",
    question: "",
    hasSubscription: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare the message body
      const messageBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Company: ${formData.company}
Subject: ${formData.subject}
Message: ${formData.question}
Has Subscription: ${formData.hasSubscription ? "Yes" : "No"}
      `.trim();

      // Send email using FormSubmit
      const formElement = document.createElement("form");
      formElement.method = "POST";
      formElement.action = "https://formsubmit.co/lm.studios.web@gmail.com";

      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = String(value);
        formElement.appendChild(input);
      });

      // Add redirect
      const redirectInput = document.createElement("input");
      redirectInput.type = "hidden";
      redirectInput.name = "_next";
      redirectInput.value = window.location.href;
      formElement.appendChild(redirectInput);

      // Disable captcha
      const captchaInput = document.createElement("input");
      captchaInput.type = "hidden";
      captchaInput.name = "_captcha";
      captchaInput.value = "false";
      formElement.appendChild(captchaInput);

      // Add custom phone notification (using a separate endpoint if available)
      // For now, we'll just send the email with all details
      
      document.body.appendChild(formElement);
      formElement.submit();
      document.body.removeChild(formElement);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        company: "",
        subject: "",
        question: "",
        hasSubscription: false,
      });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative box-border caret-transparent min-h-screen pt-40 pb-10 md:pb-20 overflow-hidden">
        <HeroVideoOverlay />
        <div className="relative z-30 box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1400px]">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact us</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-transparent" style={{ backgroundImage: "repeating-linear-gradient(90deg, #fbbf24 0px, #fbbf24 10px, transparent 10px, transparent 20px)" }}></div>
        </div>
        <div className="relative z-30 box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[850px]">
          <p className="box-border caret-transparent mt-8 mb-8 max-w-2xl text-white/70 leading-relaxed">
            Use the form below to get in touch with us about your project or inquiry. Whether you have questions, need a quote, or want to discuss your ideas, we're here to help. The information you provide will help us understand your needs and serve as a starting point for our conversation. Please note that any details shared here are for initial contact purposes only and do not represent a binding agreement or formal proposal.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative box-border caret-transparent py-10 md:py-20">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1000px]">
          <form onSubmit={handleSubmit} className="box-border caret-transparent space-y-6">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Phone and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+27"
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Company */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            {/* Row 4: Subject */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            {/* Row 5: Question/Message */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Question *
              </label>
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                required
                placeholder="Please describe your website project or inquiry."
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="hasSubscription"
                checked={formData.hasSubscription}
                onChange={handleChange}
                id="subscription"
                className="w-5 h-5 bg-transparent border border-white/30 rounded cursor-pointer accent-yellow-400"
              />
              <label htmlFor="subscription" className="text-sm text-white/70 cursor-pointer">
                Check this box if you have an active subscription with LM Studios.
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-transparent border-2 border-yellow-400 rounded-full font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {submitStatus === "success" && (
                <span className="text-green-400 text-sm font-medium">
                  Message sent successfully!
                </span>
              )}
              {submitStatus === "error" && (
                <span className="text-red-400 text-sm font-medium">
                  Error sending message. Please try again.
                </span>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative box-border caret-transparent py-20 md:py-32">
        <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1400px]">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to make your website using LM Studios?
              </h2>
            </div>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-semibold text-sm flex items-center gap-2 transition-all whitespace-nowrap">
              Ask for a quote
              <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-black -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
