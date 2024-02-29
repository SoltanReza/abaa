"use client";
import { useState } from "react";
import ContentSection from "../components/content/contentSection";
import HeroSection from "../components/hero-section/heroSection";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main>
      <HeroSection
        title="Restons en contact : votre pont vers nous."
        description="Notre page de contact est plus qu'un moyen de communication, c'est
          votre espace pour partager, demander de l'aide ou en savoir plus sur
          nos formations."
        image={{
          src: "contact.svg",
          title: "Contactez-nous",
          height: 256,
          width: 256,
        }}
      />
      <div className="flex justify-center items-center">
        <ContentSection>
          <h3> Chaque interaction compte</h3>
          <p>
            Que vous soyez un parent en quête de soutien, un bénévole désireux
            de contribuer, ou simplement quelqu'un qui cherche à en savoir plus
            sur nos initiatives, nous sommes ici pour écouter et répondre. Votre
            voix est essentielle pour nous aider à façonner un avenir plus
            lumineux pour ceux que nous servons.
          </p>
          <p>
            Ne laissez pas la distance nous séparer. Avec chaque message, nous
            construisons des ponts de compréhension et de soutien.
            Contactez-nous dès aujourd'hui et ensemble, explorons comment nous
            pouvons collaborer pour faire une réelle différence.
          </p>
          <p>
            Votre intérêt et votre soutien nous motivent à poursuivre notre
            mission avec encore plus de détermination. Nous sommes impatients de
            vous entendre et de vous accueillir dans notre communauté engagée.
          </p>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </ContentSection>
      </div>
    </main>
  );
};

export default ContactForm;
