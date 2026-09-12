/**
 * WhatsApp tracking utilities for analytics, email notifications, and deep link generation.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export interface WhatsAppClickData {
  name?: string;
  city?: string;
  whatsappNumber?: string;
  source?: string;
}

/**
 * Tracks a WhatsApp click event, fires analytics, and triggers email alert via /api/whatsapp-click
 */
export function trackWhatsAppClick(data: WhatsAppClickData = {}): void {
  try {
    const payload = {
      name: data.name || "VIP Model Inquiry",
      city: data.city || "Hyderabad",
      whatsappNumber: data.whatsappNumber || "+918294107610",
      site: "calgirlriya",
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      timestamp: new Date().toISOString(),
    };

    // Google Analytics event if available
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "whatsapp_click", {
        model_name: payload.name,
        model_city: payload.city,
        whatsapp_number: payload.whatsappNumber,
      });
    }

    // Send email notification alert to server via /api/whatsapp-click
    if (typeof window !== "undefined") {
      const blob = new Blob([JSON.stringify(payload)], {
        type: "application/json",
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/whatsapp-click", blob);
      } else {
        fetch("/api/whatsapp-click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    }

    console.log("[Analytics & Email] WhatsApp click tracked:", payload);
  } catch (error) {
    // Silently fail - tracking should never break the user experience
  }
}

/**
 * Creates a WhatsApp deep link with a pre-filled message.
 */
export function createWhatsAppLink(
  name: string = "VIP Escort",
  city: string = "Hyderabad",
  whatsappNumber: string = "+918294107610"
): string {
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const message = encodeURIComponent(
    `Hi, I am interested in booking ${name} from ${city} on calgirlriya. Please share availability and live photos.`
  );
  return `https://wa.me/${cleanNumber}?text=${message}`;
}
