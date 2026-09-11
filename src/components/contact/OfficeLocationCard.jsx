import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Globe, Linkedin, Twitter, Mail, ArrowRight, Building2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpotlightCard from '../SpotlightCard';

const OfficeLocationCard = () => {
  return (
    <section className="mb-14 sm:mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
        {/* Left Column: Geography & Operating Model */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <SpotlightCard className="p-4 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl h-full flex flex-col justify-between" withCorners>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider font-bold mb-2 sm:mb-3 whitespace-nowrap">
                <Building2 size={14} />
                <span>HEADQUARTERS & PHYSICAL LAB</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold font-mono dark:text-white text-sand-charcoal mb-2.5 sm:mb-4">
                Born in Kerala, Serving Globally
              </h3>

              <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal mb-5 sm:mb-8">
                AstriOrb operates as a remote-first engineering venture studio with our central leadership, software architecture, and physical hardware R&D laboratory rooted in Kerala, India.
              </p>

              {/* Geographic Coordinates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                <div className="p-3 sm:p-4 rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border space-y-0.5 sm:space-y-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-citron">
                    <MapPin size={13} />
                    <span>CORPORATE SEAT</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold font-mono dark:text-white text-sand-charcoal">
                    Kerala, India
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                    AstriOrb Pvt. Ltd. (Inc. 2025)
                  </p>
                </div>

                <div className="p-3 sm:p-4 rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border space-y-0.5 sm:space-y-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-emerald-400">
                    <Clock size={13} />
                    <span>OPERATIONAL HOURS</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold font-mono dark:text-white text-sand-charcoal">
                    IST (UTC +5:30)
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                    Asynchronous global coverage
                  </p>
                </div>

                <div className="p-3 sm:p-4 rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border space-y-0.5 sm:space-y-1 sm:col-span-2">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-laser-cyan">
                    <Cpu size={13} />
                    <span>HARDWARE & IOT LAB</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold font-mono dark:text-white text-sand-charcoal">
                    Project ROW Hardware Prototyping Facility
                  </div>
                  <p className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                    Embedded microcontroller PCB assembly, Bluetooth LE sensor calibration & telemetry testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 mt-6 sm:mt-8 border-t dark:border-white/10 border-sand-border flex items-center justify-between text-xs font-mono">
              <Link to="/about" className="text-citron hover:underline flex items-center gap-1">
                <span>Read the AstriOrb Story</span>
                <ArrowRight size={13} />
              </Link>
              <span className="dark:text-titanium-400 text-sand-charcoal/60">
                100% In-House R&D
              </span>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Leadership Direct Channels */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <SpotlightCard className="p-4 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl h-full flex flex-col justify-between" withCorners>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-citron uppercase tracking-wider font-bold mb-2 sm:mb-3 whitespace-nowrap">
                <Globe size={14} />
                <span>FOUNDER DIRECT CHANNELS</span>
              </div>

              <h4 className="text-lg sm:text-2xl font-bold font-mono dark:text-white text-sand-charcoal mb-1.5 sm:mb-2">
                Connect with Mohammed Hashim
              </h4>

              <p className="text-xs sm:text-sm dark:text-titanium-300 text-sand-charcoal/80 leading-relaxed font-normal mb-4 sm:mb-6">
                Direct access to our Founder & Lead Architect for technical interviews, angel syndicate discussions, and strategic partnerships.
              </p>

              <div className="space-y-2.5 sm:space-y-3">
                <a
                  href="mailto:hashim@astriorb.com?subject=Direct%20Founder%20Inquiry%20-%20Mohammed%20Hashim"
                  className="p-3 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border flex items-center justify-between group hover:border-citron/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Mail size={16} className="text-citron shrink-0" />
                    <div>
                      <div className="text-xs font-bold font-mono dark:text-white text-sand-charcoal group-hover:text-citron transition-colors">
                        Direct Founder Email
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                        hashim@astriorb.com
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={13} className="dark:text-titanium-400 text-sand-charcoal/60 group-hover:text-citron group-hover:translate-x-1 transition-all shrink-0" />
                </a>

                <a
                  href="https://linkedin.com/company/astriorb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border flex items-center justify-between group hover:border-citron/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Linkedin size={16} className="text-laser-cyan shrink-0" />
                    <div>
                      <div className="text-xs font-bold font-mono dark:text-white text-sand-charcoal group-hover:text-citron transition-colors">
                        Official LinkedIn Page
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                        /company/astriorb
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={13} className="dark:text-titanium-400 text-sand-charcoal/60 group-hover:text-citron group-hover:translate-x-1 transition-all shrink-0" />
                </a>

                <a
                  href="https://twitter.com/AstriOrb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-3.5 rounded-xl dark:bg-titanium-900 bg-sand-border/40 border dark:border-white/5 border-sand-border flex items-center justify-between group hover:border-citron/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Twitter size={16} className="text-purple-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold font-mono dark:text-white text-sand-charcoal group-hover:text-citron transition-colors">
                        Public Announcements
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono dark:text-titanium-400 text-sand-charcoal/60">
                        @AstriOrb
                      </div>
                    </div>
                  </div>
                  <ArrowRight size={13} className="dark:text-titanium-400 text-sand-charcoal/60 group-hover:text-citron group-hover:translate-x-1 transition-all shrink-0" />
                </a>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 mt-6 sm:mt-8 border-t dark:border-white/10 border-sand-border flex items-center justify-between text-xs font-mono">
              <span className="text-citron">Founder Responsive</span>
              <span className="dark:text-titanium-400 text-sand-charcoal/60">Zero Gatekeepers</span>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default React.memo(OfficeLocationCard);
