import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <div className="w-full border border-brand-green border-dashed p-24 flex-col  items-center justify-center">
      <h3>Rejoignez notre newsletter</h3>
      <p>
        Inscrivez-vous pour recevoir les dernières nouvelles et mises à jour
      </p>
      <form className="flex justify-center items-center" action="">
        <input type="email" placeholder="Enter your email" className="input" />
        <button type="button" className="btn-sm">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSection;
