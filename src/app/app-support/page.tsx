import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Luverila Hijab Designer Support",
  description: "Help and support information for Luverila Hijab Designer."
};

const supportEmail = siteConfig.email;

export default function AppSupportPage() {
  return (
    <div className="shell app-support legal-copy">
      <div className="page-intro">
        <p className="eyebrow">Luverila Hijab Designer</p>
        <h1>Support</h1>
        <p>Luverila Hijab Designer helps creators draw hijab concepts, build multi-view designs, generate AI visualizations, try designs on an authorized portrait, and prepare images for sharing.</p>
      </div>

      <section aria-labelledby="contact-support">
        <h2 id="contact-support">Contact Support</h2>
        <p>For help, email <a className="underline" href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
        <p>Please include:</p>
        <ul>
          <li>Your device model and iOS or iPadOS version</li>
          <li>The Luverila Hijab Designer app version</li>
          <li>A short description of what happened</li>
          <li>A screenshot of the error, if appropriate</li>
        </ul>
        <p>Please do not email passwords, verification codes, payment information, government identification, API keys, or private photos that are not needed to investigate the issue.</p>
        <p>We aim to respond within <strong>2–3 business days</strong>.</p>
      </section>

      <section aria-labelledby="getting-started">
        <h2 id="getting-started">Getting Started</h2>
        <ol>
          <li>Start a new design or open a saved project.</li>
          <li>Draw and arrange elements using brushes, colors, materials, patterns, layers, and front, side, or back views.</li>
          <li>Save the editable project to the on-device Works area.</li>
          <li>Export a PNG when you need a finished image.</li>
          <li>Use AI visualization or virtual try-on only when you want the selected design and optional portrait to be processed by an AI service.</li>
        </ol>
      </section>

      <section aria-labelledby="saving-restoring">
        <h2 id="saving-restoring">Saving and Restoring Designs</h2>
        <p>Design projects are primarily stored on your device. Use <strong>Save Project</strong> to create or update an editable work in the Works area. You can also export an editable project file as a separate backup.</p>
        <p><strong>Important:</strong></p>
        <ul>
          <li>Deleting the app, clearing app data, losing the device, or restoring the device may remove locally stored projects.</li>
          <li>A PNG is a finished image and cannot restore all editable layers.</li>
          <li>Keep exported project backups for important work.</li>
        </ul>
      </section>

      <section aria-labelledby="ai-generation">
        <h2 id="ai-generation">AI Generation Is Unavailable or Fails</h2>
        <p>Try the following:</p>
        <ol>
          <li>Confirm that your device has a stable internet connection.</li>
          <li>Keep the app open while the image is being generated.</li>
          <li>Try again later if the service is busy.</li>
          <li>Reduce very large imported images or complex reference material.</li>
          <li>If available, try the standard generation option before high-quality generation.</li>
        </ol>
        <p>AI generation can occasionally fail or produce an unexpected result. A generated image is a visual concept, not a guarantee of the final product’s fit, construction, color, or fabric behavior.</p>
      </section>

      <section aria-labelledby="virtual-try-on">
        <h2 id="virtual-try-on">Virtual Try-On and Face Similarity</h2>
        <p>For the best result:</p>
        <ul>
          <li>Use a clear, well-lit portrait with one person</li>
          <li>Keep the face unobstructed and use a natural camera angle</li>
          <li>Use a design view that clearly shows the hijab construction</li>
          <li>Enable identity protection when you want the person to remain recognizable</li>
          <li>Keep eye enlargement and lip-shape adjustments at moderate strength</li>
        </ul>
        <p>AI image editing may still change facial details, pose, fabric placement, or lighting. If a result does not look like the person, do not share it as an accurate representation. Try again with stronger identity protection or fewer facial beauty edits.</p>
        <p>Only upload a portrait when you are the person shown or have that person’s permission.</p>
      </section>

      <section aria-labelledby="export-sharing">
        <h2 id="export-sharing">Exporting and Sharing</h2>
        <p>You can export finished images and prepare square, portrait, or story-format sharing images. Files saved to Photos or Files remain there until you delete them using the relevant Apple app.</p>
        <p>If system sharing is unavailable, download the sharing image and share it from Photos or Files.</p>
      </section>

      <section aria-labelledby="delete-project">
        <h2 id="delete-project">Delete a Project or Photo</h2>
        <p>To remove a saved project, open the Works area and choose <strong>Delete</strong> for that project.</p>
        <p>The original portrait selected for virtual try-on is not automatically added to an editable project. To remove downloaded or exported images, delete them separately from Photos or Files and, if needed, from <strong>Recently Deleted</strong>.</p>
        <p>The current release does not require a Luverila account. Therefore, there is no account profile to delete. If a future release introduces accounts, this page will provide an account-deletion method before that feature is launched.</p>
        <p>For a privacy request, contact <a className="underline" href={`mailto:${supportEmail}`}>{supportEmail}</a>. See our <Link className="underline" href="/app-privacy">App Privacy Policy</Link> for details.</p>
      </section>

      <section aria-labelledby="company-information">
        <h2 id="company-information">Company Information</h2>
        <p>Luverila Hijab Designer is operated by:</p>
        <p><strong>{siteConfig.legalName}</strong><br /><strong>{siteConfig.address}</strong><br /><strong>China</strong></p>
        <p className="support-updated">Last updated: August 8, 2026</p>
      </section>
    </div>
  );
}
