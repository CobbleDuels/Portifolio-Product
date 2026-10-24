type Channel = "WhatsApp" | "E-mail" | "LinkedIn";

export function ContactIcon({ channel }: { channel: Channel }) {
  return <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {channel === "WhatsApp" ? <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.7A8.5 8.5 0 1 1 20.5 11.5Z" /><path d="m8.1 7.5 1.2-.4 1.2 2.6-1 .9a8.1 8.1 0 0 0 3.8 3.8l.9-1 2.6 1.2-.4 1.2c-.3.9-1.4 1.4-2.3 1.1-4-1.3-6.9-4.2-8.2-8.2-.3-.9.2-2 1.1-2.3" /></> : channel === "E-mail" ? <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></> : <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7.5 10v7M7.5 7v.1M11.5 17v-7m0 3a3 3 0 0 1 6 0v4" /></>}
  </svg>;
}
