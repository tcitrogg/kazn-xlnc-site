"use server"
import '../envConfig.ts'

const GOOGLESCRIPTURL = "https://script.google.com/macros/s/AKfycbzGQyq_NuwOPG-kalmTcKYIkHBDqu2J0-xnRRBWG-kAR-fO9VytitBPn_Gw6riY9hNM/exec"
// const googleScriptURL = process.env.GOOGLESCRIPTURL!

export const addRegistration = async (formData: FormData) => {
  const email = formData.get("email") as string
  // const timestamp = Date.now()

  try {
    const res = await fetch(GOOGLESCRIPTURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "RantApp Waitlist",
        email,
        // timestamp,
      }),
    })

    if (!res.ok) {
      throw new Error("Failed to add registration to RantList")
    }

    return {
      successMessage: "Success! Your Email has been received!",
    }
  } catch (error) {
    return {
      errorMessage: "Ooops! There was a problem!",
    }
  }
}