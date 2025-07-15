"use client";
import React from "react";

export const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    const contentSection = document.querySelector('.content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <h1 className="hero-title">GraphTinder</h1>
      <p className="hero-subtitle">
        Найди своего идеального партнёра для проектов и коллабораций в Москве
      </p>
      {/* Animated Scroll Arrow */}
      <div className="scroll-arrow" onClick={scrollToContent}>
        <svg className="arrow-icon" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </div>
    </section>
  );
}; 