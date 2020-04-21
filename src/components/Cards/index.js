import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';

export default function Cards({ data: { confirmed, deaths, recovered, lastUpdate } }) {
  if (!confirmed) {
    return null
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {
                new Date(lastUpdate).toUTCString()
              }
            </Typography>
            <Typography varaint="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Revovered
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={recovered.value}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toUTCString()}
            </Typography>
            <Typography varaint="body2">
              Number of recovered cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography varaint="h5">
              <CountUp
                start={0}
                end={deaths.value}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toUTCString()}
            </Typography>
            <Typography varaint="body2">
              Number of death cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}
