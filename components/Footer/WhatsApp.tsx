"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export function WhatsApp() {
  return (
    <FloatingWhatsApp
      className="text-black"
      phoneNumber="+39 331 204 4244"
      accountName="GF MontiForm"
      avatar="/images/logoW.png"
      statusMessage="Di solito rispondiamo nel giro di un'ora..."
      chatMessage="Buongiorno, possiamo esserti utile?"
      placeholder="Scrivi qui il tuo messaggio"
      allowEsc
      notification
    />
  );
}
