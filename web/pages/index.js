import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import PieChart from '../components/Pie';
import { GradientPinkBlue } from '@visx/gradient';
import { AreaClosed } from '@visx/shape';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

export default function Home() {
  const data = [
    { symbol: "ADA", amount: 200, color: "#0033ad", inUSD: 1.48 },
    { symbol: "SOL", amount: 5, color: "#00ffbd", inUSD: 37.6 },
    { symbol: "BTC", amount: 0.005, color: "#F7931A", inUSD: 37363 },
  ];

  
  return (
    <div className={styles.container}>
      <Head>
        <title>visx</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello There
      <main>
        <svg width={100} height={100}>
          <Group top={50} left={50}>
            <Pie data={data} pieValue={(x) => x.amount * x.inUSD} outerRadius={50}>

            </Pie>
          </Group>
        </svg>
      </main>
    </div>
  )
}
