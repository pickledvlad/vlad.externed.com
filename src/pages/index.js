import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx(styles.heroBanner)}>
            <div className="container">
                {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
                {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
                <div className={styles.buttons}>
                    <Link
                        to="/docs">
                        👉 notes
                    </Link>
                    <Link
                        to="https://twitter.com/pickledvlad">
                        🐦 twitter
                    </Link>
                    <Link
                        to="https://github.com/pickledvlad">
                        🦜 github
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title={`Hey 👋`}
            description="Description will go into a meta tag in <head />">
            <div className="glowing-cont">
                <div class="glowing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="glowing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="glowing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="glowing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div></div>
            <HomepageHeader />

        </Layout>
    );
}