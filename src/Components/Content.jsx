import React from 'react'
import { TbSettingsAutomation, } from "react-icons/tb";
import { BsBrightnessHigh, BsDatabaseFillGear, BsFillBackpack2Fill, BsFillCloudArrowUpFill   } from "react-icons/bs";

export const Content = () => {
  return (
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">The Benefits of
            VR Customer Service Training</p>
          <p class="mt-6 text-lg leading-8 text-white">Virtual Reality (VR) and Augmented Reality (AR) technologies offer multiple benefits for businesses, enhancing efficiency, reducing costs, and opening new business opportunities. Have a look to our main features which will boost your call center operations:</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-indigo-600">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <TbSettingsAutomation size={25}/>
                  </svg>
                </div>
                Customizable Contents:
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">Top call drivers and behaviors individual approach)
                Customize the training content based on the most frequent call drivers and specific behaviors exhibited by individual agents. Training modules can be tailored to address the unique needs and challenges that agents face according to the industry, ensuring they receive relevant and effective training.</dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-indigo-600">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <BsBrightnessHigh size={25} />
                  </svg>
                </div>
                Simulated Environments:
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">E-mpathy allow you to create realistic virtual environments where agents can practice handling customer interactions. These simulations can mimic real-life scenarios, such as high-stress situations, complex customer queries, or routine calls.
                Simulated environments provide a safe space for agents to practice and hone their skills without the risk of negative consequences, improving confidence and proficiency.</dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-indigo-600">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
                Interactivity and Real-time Feedback (Based on Speech Analytics)
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">Leverage speech analytics to provide real-time feedback to agents during training sessions. The system analyzes the agent's speech patterns, tone, and content, offering immediate suggestions and corrections, during the training and taking calls.
                Forget QA catching phrases listening to long long calls, instead, help the agents to quickly adjust their techniques and behaviors, lead them to a faster learning and improvement.</dd>
            </div>
            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-indigo-600">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <BsDatabaseFillGear size={25}/>
                  </svg>
                </div>
                Data Analysis and Performance Tracking (API connected with internal KPIs data)
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">This feature involves the integration of performance data from the training platform with the company's internal KPIs via API connections. It enables comprehensive data analysis and performance tracking.  Provides a clear picture of how training impacts overall performance and allows managers to identify trends, measure impacts, and adjust training programs as needed.</dd>
            </div>

            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-indigo-600">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <BsFillBackpack2Fill size={25}/>
                  </svg>
                </div>
                Collaboration and Learning Community (Collaborative and interactive Forums):
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">Provide a platform for agents to engage in collaborative learning through forums and discussion boards. Agents can share experiences, ask questions, and provide peer support.
                Collaborative learning fosters a sense of community and continuous learning among agents. It encourages knowledge sharing and collective problem-solving, which can enhance overall performance.</dd>
            </div>

            <div class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-indigo-600">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <BsFillCloudArrowUpFill size={25}/>
                  </svg>
                </div>
                Accessibility and Scalability (Anytime, anywhere)
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">This feature ensures that the training platform is accessible from any location and on any device, allowing agents to train at their convenience. The platform is designed to scale easily to accommodate a growing number of users.It also ensures that as the company grows, the training solution can expand without loss of performance.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
