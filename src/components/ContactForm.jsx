import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://dev-site-backend.onrender.com/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          budget: "",
          message: "",
        });
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:col-span-3">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <div className="grid gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="budget"
              className="text-sm font-medium text-gray-700"
            >
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            >
              <option value="">Select your budget</option>
              <option value="1000-3000">R1,000 - R3,000</option>
              <option value="3000-5000">R3,000 - R5,000</option>
              <option value="5000-10000">R5,000 - R10,000</option>
              <option value="10000+">R10,000+</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Tell me about your project..."
              required
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>

          {submitStatus === "success" && (
            <div className="p-3 bg-green-100 text-green-700 rounded-lg">
              Message sent successfully!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg">
              Failed to send message. Please try again.
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
