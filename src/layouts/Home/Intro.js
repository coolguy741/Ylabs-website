import ArrowDown from 'assets/arrow-down.svg';
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { useTheme } from 'components/ThemeProvider';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { VisuallyHidden } from 'components/VisuallyHidden';
import { AnimatePresence } from 'framer-motion';
import { useInterval, usePrevious, useScrollToHash } from 'hooks';
import dynamic from 'next/dynamic';
import RouterLink from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { cssProps } from 'utils/style';
import styles from './Intro.module.css';

const DisplacementSphere = dynamic(() =>
  import('layouts/Home/DisplacementSphere').then(mod => mod.DisplacementSphere)
);

export function Intro({
  id,
  sectionRef,
  disciplines,
  scrollIndicatorHidden,
  heading,
  description,
  ...rest
}) {
  const theme = useTheme();
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();

  useEffect(() => {
    if (prevTheme && prevTheme.themeId !== theme.themeId) {
      setDisciplineIndex(0);
    }
  }, [theme.themeId, prevTheme]);

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme.themeId} timeout={3000}>
        {(visible, status) => (
          <Fragment>
            <DisplacementSphere />
            <header className={styles.text}>
              <Heading level={0} as="h2" className={styles.title}>
                <span aria-hidden className={styles.row}>
                  <span
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationXS })}
                  >
                    Ylabs
                  </span>
                  <span className={styles.line} data-status={status} />
                </span>
              </Heading>
              <div className={styles.description} data-visible={visible} id={titleId}>
                <DecoderText text={heading} delay={300} />
              </div>
            </header>
            <RouterLink href="/#project-1">
              <a
                className={styles.scrollIndicator}
                data-status={status}
                data-hidden={scrollIndicatorHidden}
                onClick={handleScrollClick}
              >
                <VisuallyHidden>Scroll to projects</VisuallyHidden>
              </a>
            </RouterLink>
          </Fragment>
        )}
      </Transition>
    </Section>
  );
}
