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

import React from "react"
import { Metric as MetricProto } from "src/autogen/proto"
import { mount } from "src/lib/test_util"
import Metric, { MetricProps } from "./Metric"

const getProps = (elementProps: Partial<MetricProto> = {}): MetricProps => ({
  element: MetricProto.create({
    label: "Active Developers",
    body: "123",
    delta: "123",
    delta_colors: 0,
  }),
})

describe("Metric element", () => {
  it("renders metric as expected", () => {
    const props = getProps()
    const wrapper = mount(<Metric {...props} />)
    expect(wrapper).toBeDefined()
  })
})