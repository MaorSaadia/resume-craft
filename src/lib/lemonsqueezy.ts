import {
  getAuthenticatedUser,
  lemonSqueezySetup,
} from "@lemonsqueezy/lemonsqueezy.js";

import { env } from "@/env";

// Setup Lemonsqueezy with your API key
lemonSqueezySetup({
  apiKey: env.LEMON_SQUEEZY_API_KEY,
  onError: (error) => console.error("Lemonsqueezy Error:", error),
});

// // Function to verify authentication
export async function verifyLemonSqueezyConnection() {
  try {
    const { data, error } = await getAuthenticatedUser();

    if (error) {
      console.error("Lemonsqueezy Authentication Error:", error.message);
      return { success: false, error: error.message };
    }

    // console.log("Lemonsqueezy User Data:", data);
    return { success: true, data };
  } catch (catchError) {
    console.error("Unexpected Lemonsqueezy Error:", catchError);
    return {
      success: false,
      error: catchError instanceof Error ? catchError.message : "Unknown error",
    };
  }
}
