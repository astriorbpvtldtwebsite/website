import React from 'react';

const SectionWrapper = React.memo(({ children, id, className }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
