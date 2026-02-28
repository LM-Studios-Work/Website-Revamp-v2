"use server";

interface State {
  success: boolean;
  message: string | null;
}

export async function submitContactForm(prevState: State, formData: FormData): Promise<State> {
  try {
    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      country: formData.get("country"),
      company: formData.get("company"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      _captcha: "false",
      _template: "table", // Optional: nicer email format
    };

    // Convert FormData to a plain object
    const data = Object.fromEntries(
      Object.entries(rawFormData).filter(([_, v]) => v !== null)
    );

    const response = await fetch("https://formsubmit.co/lm.studios.web@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { success: false, message: "Failed to submit form. Please try again later." };
    }

    return { success: true, message: "Thank you! Your message has been sent successfully." };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
