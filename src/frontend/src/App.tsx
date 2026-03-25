import { useEffect, useState } from "react";

const WA_LINK =
  "https://wa.me/919999715086?text=Hello%20I%20want%20to%20join%20Spartan%20Taekwondo%20Academy";

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-fade-up, .animate-fade-in",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );
    for (const el of elements) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-4 h-4 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckIconRed() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-red-brand flex-shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Coach", href: "#coach" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#111111] shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="flex items-center gap-3"
            data-ocid="header.link"
          >
            <img
              src="/assets/uploads/17744224760004689413359266627768-019d23d2-cbc8-715e-8265-6000151e89eb-1.jpg"
              alt="Spartan Taekwondo Academy Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <div className="leading-tight">
              <div className="font-heading text-white text-sm md:text-base font-bold tracking-wider uppercase">
                Spartan
              </div>
              <div className="font-heading text-white text-xs tracking-widest uppercase opacity-80">
                Taekwondo Academy
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-body text-sm font-medium tracking-wide transition-colors uppercase"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-5 py-2 bg-red-brand text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all hover:bg-red-brand-bright hover:shadow-red"
              data-ocid="header.primary_button"
            >
              Join Now
            </a>
            <button
              type="button"
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="header.toggle"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#111111] border-t border-white/10 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-white/80 hover:text-white font-body text-sm uppercase tracking-wide"
                onClick={() => setMenuOpen(false)}
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 mt-2 block text-center px-5 py-3 bg-red-brand text-white font-heading text-sm font-semibold uppercase tracking-wider rounded"
              onClick={() => setMenuOpen(false)}
              data-ocid="header.primary_button"
            >
              Join Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-taekwondo.dim_1600x900.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-brand/90 text-white text-sm font-heading font-semibold uppercase tracking-widest rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Admissions Open Now
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-white leading-none mb-6 animate-fade-up">
            Master the Art of
            <span className="block text-red-brand">Taekwondo</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-white/85 mb-8 leading-relaxed animate-fade-up">
            Train with Coach Himanshu Sir at Spartan Taekwondo Academy
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-whatsapp text-white font-heading text-lg font-semibold uppercase tracking-wider rounded-lg transition-all hover:brightness-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] animate-fade-up"
            data-ocid="hero.primary_button"
          >
            <WhatsAppIcon />
            Join on WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <svg
          aria-hidden="true"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

function AboutSection() {
  const stats = [
    { value: "500+", label: "Students Trained", id: "students" },
    { value: "10+", label: "Years Experience", id: "years" },
    { value: "50+", label: "Medals Won", id: "medals" },
    { value: "5", label: "Expert Programs", id: "programs" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-up">
            <span className="font-heading text-red-brand text-sm uppercase tracking-widest font-semibold">
              About Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-[#111] mt-3 mb-6 leading-tight">
              Spartan Taekwondo Academy
            </h2>
            <div className="w-16 h-1 bg-red-brand mb-6" />
            <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed mb-4">
              Welcome to Spartan Taekwondo Academy — a centre of excellence
              built on the values of discipline, precision, and relentless
              self-improvement. Founded by Coach Himanshu Sir, our academy has
              grown into one of the most trusted martial arts training
              destinations in Delhi.
            </p>
            <p className="font-body text-gray-700 text-base leading-relaxed mb-4">
              We believe taekwondo is more than a sport — it is a way of life.
              Our programs instil physical fitness, mental strength,
              self-defense capability, and the confidence to conquer any
              challenge life presents.
            </p>
            <p className="font-body text-gray-700 text-base leading-relaxed">
              Whether you are a child taking your first kick or an adult seeking
              a transformative fitness journey, Spartan Taekwondo Academy
              welcomes you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 animate-fade-up">
            {stats.map((stat, i) => (
              <div
                key={stat.id}
                className="bg-[#111] text-white p-8 rounded-lg text-center card-hover"
                data-ocid={`about.card.${i + 1}`}
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-red-brand mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm md:text-base text-white/75 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoachSection() {
  const achievements = [
    {
      id: "blackbelt",
      text: "Black Belt Dan Grade — Certified Master Instructor",
    },
    { id: "national", text: "National Level Taekwondo Competitor" },
    { id: "experience", text: "10+ Years of Coaching Experience" },
    { id: "students", text: "Trained 500+ students across all age groups" },
    { id: "wtf", text: "Affiliated with WTF (World Taekwondo Federation)" },
    { id: "olympic", text: "Specialised in Olympic-style sparring & patterns" },
  ];

  return (
    <section id="coach" className="py-20 md:py-28 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-up">
          <span className="font-heading text-red-brand text-sm uppercase tracking-widest font-semibold">
            Meet the Mentor
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-[#111] mt-3 leading-tight">
            Coach Himanshu Sir
          </h2>
          <div className="w-16 h-1 bg-red-brand mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-brand/20 rounded-2xl" />
              <img
                src="/assets/uploads/file_00000000447071fa94d2822a4898f21f-019d2497-a317-745b-8bd4-a3774b2d1330-1.png"
                alt="Coach Himanshu Sir"
                className="relative w-full max-w-md mx-auto rounded-xl shadow-2xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-brand text-white px-6 py-3 rounded-lg shadow-lg">
                <div className="font-heading text-2xl font-bold">10+</div>
                <div className="font-body text-xs uppercase tracking-wide">
                  Years Coaching
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-up">
            <h3 className="font-heading text-3xl font-bold uppercase text-[#111] mb-1">
              Coach Himanshu Sir
            </h3>
            <p className="font-body text-red-brand font-semibold uppercase tracking-wider text-sm mb-4">
              Head Coach &amp; Founder
            </p>
            <div className="w-12 h-1 bg-red-brand mb-6" />
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              Coach Himanshu Sir has dedicated over a decade to the art and
              sport of Taekwondo. A certified black belt and seasoned
              national-level competitor, he brings an unparalleled depth of
              technical knowledge, strategic coaching, and genuine passion to
              every class.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-8">
              His coaching philosophy centres around holistic development —
              shaping not just skilled martial artists, but disciplined,
              confident, and well-rounded individuals who excel both on the mat
              and in life.
            </p>

            <div className="space-y-3">
              {achievements.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <CheckIconRed />
                  <span className="font-body text-gray-700 text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      id: "kids",
      emoji: "🧒",
      title: "Kids Taekwondo Program",
      age: "Ages 5–12",
      desc: "Fun, safe, and structured training designed to build coordination, discipline, and confidence in young children through age-appropriate techniques.",
    },
    {
      id: "beginner",
      emoji: "🥋",
      title: "Beginner Level Training",
      age: "All Ages",
      desc: "The perfect starting point for newcomers. Learn the fundamental stances, kicks, blocks, and patterns with guidance and patience from our coaches.",
    },
    {
      id: "intermediate",
      emoji: "⚡",
      title: "Intermediate Training",
      age: "All Ages",
      desc: "Elevate your technique, speed, and power. Intensive sparring drills, complex patterns, and competition preparation for committed students.",
    },
    {
      id: "advanced",
      emoji: "🏆",
      title: "Advanced / Black Belt Training",
      age: "Experienced",
      desc: "For dedicated practitioners aiming for black belt mastery. Advanced forms, high-level competition coaching, and leadership development.",
    },
    {
      id: "selfdefense",
      emoji: "🛡️",
      title: "Self-Defense Training",
      age: "All Ages",
      desc: "Practical real-world self-defense techniques derived from Taekwondo. Build awareness, reaction speed, and the skills to protect yourself and others.",
    },
  ];

  return (
    <section id="programs" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-up">
          <span className="font-heading text-red-brand text-sm uppercase tracking-widest font-semibold">
            What We Teach
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-[#111] mt-3 leading-tight">
            Training Programs
          </h2>
          <div className="w-16 h-1 bg-red-brand mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <div
              key={prog.id}
              className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm card-hover animate-fade-up"
              data-ocid={`programs.card.${i + 1}`}
            >
              <div className="text-4xl mb-4">{prog.emoji}</div>
              <div className="inline-block px-3 py-1 bg-red-brand/10 text-red-brand text-xs font-heading font-semibold uppercase tracking-wider rounded-full mb-3">
                {prog.age}
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-[#111] mb-3 leading-tight">
                {prog.title}
              </h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                {prog.desc}
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-brand text-white font-heading text-sm font-semibold uppercase tracking-wider rounded transition-all hover:bg-red-brand-bright"
                data-ocid={`programs.button.${i + 1}`}
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OffersSection() {
  const offers = [
    {
      id: "training",
      emoji: "🥋",
      title: "Expert Taekwondo Training",
      desc: "World-class instruction from a certified black belt coach with 10+ years of competitive and teaching experience.",
    },
    {
      id: "discipline",
      emoji: "🧠",
      title: "Self-Control & Mental Discipline",
      desc: "Build focus, emotional regulation, and a warrior mindset that carries over into every area of your life.",
    },
    {
      id: "fitness",
      emoji: "🔥",
      title: "Weight Loss & Fitness Transformation",
      desc: "Dynamic full-body workouts that burn calories, build lean muscle, and dramatically improve cardiovascular endurance.",
    },
    {
      id: "flexibility",
      emoji: "🤸",
      title: "Flexibility & Body Conditioning",
      desc: "Progressive stretching routines and conditioning drills that improve mobility, posture, and injury resistance.",
    },
    {
      id: "confidence",
      emoji: "💪",
      title: "Confidence & Personality Development",
      desc: "Step off the mat with greater self-assurance, improved communication skills, and a powerful presence.",
    },
  ];

  return (
    <section id="offers" className="py-20 md:py-28 bg-dark-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-up">
          <span className="font-heading text-red-brand text-sm uppercase tracking-widest font-semibold">
            Premium Experience
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-white mt-3 leading-tight">
            What We Offer
          </h2>
          <div className="w-16 h-1 bg-red-brand mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <div
              key={offer.id}
              className="bg-dark-card-brand border border-white/10 rounded-xl p-7 card-hover cursor-default group animate-fade-up"
              data-ocid={`offers.card.${i + 1}`}
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {offer.emoji}
              </div>
              <h3 className="font-heading text-xl font-bold uppercase text-white mb-3 leading-tight group-hover:text-red-brand transition-colors duration-300">
                {offer.title}
              </h3>
              <p className="font-body text-white/65 text-sm leading-relaxed">
                {offer.desc}
              </p>
              <div className="mt-5 w-8 h-0.5 bg-red-brand group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const reasons = [
    {
      id: "certified",
      title: "Certified & Experienced Coach",
      desc: "Train under a black belt certified instructor with 10+ years of teaching and competitive experience.",
    },
    {
      id: "safe",
      title: "Safe & Disciplined Environment",
      desc: "A structured, respectful dojo where safety protocols and martial arts etiquette are strictly maintained.",
    },
    {
      id: "personal",
      title: "Personal Attention to Every Student",
      desc: "Small batch sizes ensure personalised coaching and measurable progress for each individual.",
    },
    {
      id: "growth",
      title: "Physical + Mental Growth",
      desc: "We develop the whole person — strength, flexibility, discipline, focus, and confidence.",
    },
    {
      id: "competition",
      title: "Competition Preparation",
      desc: "Specialised training and strategic coaching to prepare students for local, state, and national competitions.",
    },
  ];

  return (
    <section id="why" className="py-20 md:py-28 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-up">
            <span className="font-heading text-red-brand text-sm uppercase tracking-widest font-semibold">
              Our Advantage
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-[#111] mt-3 mb-6 leading-tight">
              Why Choose Us?
            </h2>
            <div className="w-16 h-1 bg-red-brand mb-8" />
            <div className="space-y-5">
              {reasons.map((reason, i) => (
                <div
                  key={reason.id}
                  className="flex items-start gap-4"
                  data-ocid={`whyus.item.${i + 1}`}
                >
                  <div className="w-8 h-8 bg-red-brand rounded-full flex-shrink-0 flex items-center justify-center mt-0.5">
                    <CheckIcon />
                  </div>
                  <div>
                    <div className="font-heading text-base font-bold uppercase text-[#111] mb-1">
                      {reason.title}
                    </div>
                    <div className="font-body text-gray-600 text-sm leading-relaxed">
                      {reason.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up relative hidden lg:block">
            <div className="bg-[#111] rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-brand/20 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-brand/20 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10 text-center">
                <div className="font-heading text-7xl font-bold text-red-brand mb-2">
                  ₹
                </div>
                <div className="font-heading text-2xl font-bold uppercase text-white mb-4">
                  Affordable Excellence
                </div>
                <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
                  World-class taekwondo training at fees that are accessible to
                  every family. Invest in your child&apos;s future today.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-brand text-white font-heading text-sm font-bold uppercase tracking-wider rounded transition-all hover:bg-red-brand-bright"
                  data-ocid="whyus.primary_button"
                >
                  Ask About Fees
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    {
      id: "logo",
      src: "/assets/uploads/file_00000000e60c71fa94528ac27f97ada5-019d23ca-75c4-7488-9d1d-630954105444-1.png",
      alt: "Spartan Taekwondo Academy",
    },
    {
      id: "champ1",
      src: "/assets/uploads/img-20260126-wa0002-019d23cb-6505-714a-aa77-00a06c5f765c-2.jpg",
      alt: "Championship Photo",
    },
    {
      id: "champ2",
      src: "/assets/uploads/img-20260131-wa0004-019d23cb-c2bf-7738-a113-58d47d9c9637-3.jpg",
      alt: "Championship Event",
    },
    {
      id: "champ3",
      src: "/assets/uploads/img-20260131-wa0006-019d23cc-0cd3-760b-8230-13ab549c265c-4.jpg",
      alt: "Championship Ceremony",
    },
    {
      id: "champ4",
      src: "/assets/uploads/img-20251105-wa0001-019d23e7-6ac8-723b-8781-f3dc1472e5d8-1.jpg",
      alt: "Championship Group Photo",
    },
    {
      id: "champ5",
      src: "/assets/uploads/img-20251130-wa0000-019d23ea-7e24-7384-a46d-2566cbcdbae3-1.jpg",
      alt: "Championship Medal Photo",
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-up">
          <span className="font-heading text-red-brand text-sm uppercase tracking-widest font-semibold">
            Our Journey
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-[#111] mt-3 leading-tight">
            Gallery
          </h2>
          <div className="w-16 h-1 bg-red-brand mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {images.map((img, i) => (
            <div
              key={img.id}
              className="gallery-img-wrap rounded-xl overflow-hidden shadow-md animate-fade-up"
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      id: "priya",
      name: "Priya Sharma",
      role: "Parent of Student (Age 8)",
      stars: 5,
      quote:
        "My daughter joined Spartan Academy 6 months ago and the transformation is incredible. She's more focused, confident, and disciplined. Coach Himanshu Sir gives personal attention to every child. Best decision we made!",
    },
    {
      id: "rohan",
      name: "Rohan Verma",
      role: "Intermediate Student",
      stars: 5,
      quote:
        "The level of coaching here is elite. Coach Himanshu Sir doesn't just teach kicks — he builds your character. I've won two district-level competitions since joining. This academy is the real deal.",
    },
    {
      id: "meena",
      name: "Meena Gupta",
      role: "Parent of Two Students",
      stars: 5,
      quote:
        "Both my sons train here and we couldn't be happier. The environment is safe, disciplined, and motivating. Coach Himanshu Sir is genuinely invested in every student's growth. Highly recommend!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-up">
          <span className="font-heading text-red-brand text-sm uppercase tracking-widest font-semibold">
            Student Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-[#111] mt-3 leading-tight">
            Testimonials
          </h2>
          <div className="w-16 h-1 bg-red-brand mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-7 shadow-sm card-hover animate-fade-up"
              data-ocid={`testimonials.card.${i + 1}`}
            >
              <div className="flex gap-1 mb-4">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p className="font-body text-gray-700 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-heading text-base font-bold uppercase text-[#111]">
                  {t.name}
                </div>
                <div className="font-body text-red-brand text-xs uppercase tracking-wider mt-0.5">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-up">
          <span className="font-heading text-red-brand text-sm uppercase tracking-widest font-semibold">
            Get in Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-[#111] mt-3 leading-tight">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-red-brand mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-up space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-brand rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-heading text-sm font-bold uppercase text-[#111] mb-1">
                  Address
                </div>
                <div className="font-body text-gray-600 text-sm leading-relaxed">
                  Near Modern Savitri Public School,
                  <br />
                  Asthal Mandir Road, New Delhi
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-brand rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-heading text-sm font-bold uppercase text-[#111] mb-1">
                  Phone
                </div>
                <a
                  href="tel:9999715086"
                  className="font-body text-gray-600 text-sm hover:text-red-brand transition-colors"
                  data-ocid="contact.link"
                >
                  9999715086
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#E1306C] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <div className="font-heading text-sm font-bold uppercase text-[#111] mb-1">
                  Instagram
                </div>
                <a
                  href="https://www.instagram.com/spartan_taekwondo_a_cademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-gray-600 text-sm hover:text-[#E1306C] transition-colors"
                  data-ocid="contact.link"
                >
                  @spartan_taekwondo_a_cademy
                </a>
              </div>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-whatsapp text-white font-heading text-base font-semibold uppercase tracking-wider rounded-lg transition-all hover:brightness-110"
              data-ocid="contact.primary_button"
            >
              <WhatsAppIcon />
              Chat Now on WhatsApp
            </a>
          </div>

          <div className="animate-fade-up rounded-xl overflow-hidden shadow-lg h-80 lg:h-auto min-h-[320px]">
            <iframe
              src="https://maps.google.com/maps?q=Asthal+Mandir+Road,+New+Delhi&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Spartan Taekwondo Academy Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-dark-brand relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(211,47,47,0.15) 0%, transparent 60%)",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-brand/10 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-red-brand/50 text-red-brand text-xs font-heading font-semibold uppercase tracking-widest rounded-full mb-6">
          <span className="w-2 h-2 bg-red-brand rounded-full animate-pulse" />
          Admissions Open
        </div>
        <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase text-white leading-tight mb-6">
          Start Your Taekwondo
          <span className="block text-red-brand">Journey Today</span>
        </h2>
        <p className="font-body text-white/70 text-lg leading-relaxed mb-8">
          Limited seats available. Join Spartan Taekwondo Academy and begin your
          transformation under the guidance of Coach Himanshu Sir.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-whatsapp text-white font-heading text-lg font-bold uppercase tracking-wider rounded-lg transition-all hover:brightness-110 hover:shadow-[0_0_40px_rgba(37,211,102,0.4)]"
          data-ocid="finalcta.primary_button"
        >
          <WhatsAppIcon />
          Enroll via WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Coach", href: "#coach" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/uploads/17744224760004689413359266627768-019d23d2-cbc8-715e-8265-6000151e89eb-1.jpg"
                alt="Spartan Taekwondo Academy"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-heading text-white text-base font-bold tracking-wider uppercase">
                  Spartan
                </div>
                <div className="font-heading text-white/60 text-xs tracking-widest uppercase">
                  Taekwondo Academy
                </div>
              </div>
            </div>
            <p className="font-body text-white/55 text-sm leading-relaxed">
              Discipline. Precision. Strength. Confidence.
              <br />
              Train with the best. Become the best.
            </p>
          </div>

          <div>
            <div className="font-heading text-white text-sm font-bold uppercase tracking-wider mb-4">
              Quick Links
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/55 text-sm hover:text-white transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-heading text-white text-sm font-bold uppercase tracking-wider mb-4">
              Contact
            </div>
            <div className="space-y-3 font-body text-white/55 text-sm">
              <div>
                Near Modern Savitri Public School,
                <br />
                Asthal Mandir Road, New Delhi
              </div>
              <a
                href="tel:9999715086"
                className="block hover:text-white transition-colors"
              >
                📞 9999715086
              </a>
              <a
                href="https://www.instagram.com/spartan_taekwondo_a_cademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
              >
                📸 @spartan_taekwondo_a_cademy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-body text-white/40 text-xs text-center md:text-left">
            &copy; {currentYear} Spartan Taekwondo Academy. All rights reserved.
          </div>
          <div className="font-body text-white/40 text-xs text-center">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
      data-ocid="floating.primary_button"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <CoachSection />
        <ProgramsSection />
        <OffersSection />
        <WhyUsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
