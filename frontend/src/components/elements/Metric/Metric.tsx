/**
 * @license
 * Copyright 2018-2021 Streamlit Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactElement } from "react"
import { Metric as MetricProto } from "src/autogen/proto"
import { Theme } from "src/theme"
import { useTheme } from "emotion-theming"
import {
  StyledMetricSpan,
  StyledMetricText,
  StyledMetricLabelText,
  StyledMetricValueText,
  StyledMetricDeltaText,
} from "./styled-components"

export interface MetricProps {
  element: MetricProto
}

export default function Metric({ element }: MetricProps): ReactElement {
  const { colors }: Theme = useTheme()
  const { MetricColor, MetricDirection } = MetricProto

  let direction = ""
  let color = ""
  const stRed = colors.red
  const stGreen = colors.green

  switch (element.color) {
    case MetricColor.RED:
      color = stRed
      break
    case MetricColor.GREEN:
      color = stGreen
      break
    // this must be grey
    default:
      color = colors.gray
      break
  }

  switch (element.direction) {
    case MetricDirection.DOWN:
      direction = "▼"
      break
    case MetricDirection.UP:
      direction = "▲"
      break
    // this must be none
    default:
      direction = ""
      break
  }

  const deltaProp = { color }
  return (
    <div data-testid="metric-container">
      <StyledMetricLabelText data-testid="stMetricLabel">
        <StyledMetricText> {element.label} </StyledMetricText>
      </StyledMetricLabelText>
      <StyledMetricValueText data-testid="stMetricValue">
        <StyledMetricText> {element.body} </StyledMetricText>
      </StyledMetricValueText>
      <StyledMetricDeltaText data-testid="stMetricDelta" style={deltaProp}>
        <StyledMetricSpan>{direction}</StyledMetricSpan>
        <StyledMetricText> {element.delta} </StyledMetricText>
      </StyledMetricDeltaText>
    </div>
  )
}