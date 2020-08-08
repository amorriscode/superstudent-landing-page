import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div className="landing">
      <Nav />

      <div className="container mx-auto p-5 md:p-0">
        <header className="sm:flex pb-20 sm:pt-20">
          <div className="md:w-1/2 flex flex-col justify-center text-center sm:text-left">
            <img className="w-2/3 mx-auto block sm:hidden pb-5" src="/assets/peep-wheelchair.png" />

            <h1 className="text-5xl sm:text-6xl font-bold leading-tight z-10">
              Heroes in every classroom.
            </h1>

            <p className="text-3xl z-10">
              Create, monitor, and track progress of Individualised Education Plans. Supporting student progress has never been easier!
            </p>

            <div className="squiggles w-48 h-48 absolute -ml-24 -mt-56"></div>
          </div>

          <div className="md:w-1/2 relative">
            <img className="peep-2 absolute hidden lg:block" src="/assets/peep-standing.png" />
            <img className="peep-1 absolute hidden sm:block" src="/assets/peep-wheelchair.png" />
          </div>
        </header>

        <div className="my-32 md:my-64 lg:flex items-center lg:space-x-20">
          <div className="lg:w-1/2 mb-10">
            <h2 className="text-5xl font-bold z-10 relative">
              Student-led Learning
            </h2>

            <p className="text-2xl relative z-10">
              Every student is unique. We take the friction out of developing IEPs. Our platform allows student input to drive their education, making learning fun and engaging.
            </p>

            <div className="squiggles-purple w-48 h-48 absolute -ml-24 -mt-56"></div>
          </div>
        

          <div className=" lg:w-1/2 flex flex-col">
            <div className="mr-10 lg:mr-20 shadow-2xl rounded-lg bg-white p-4">
              <h3 className="font-bold mb-4">Interests</h3>

              <div className="space-y-2">
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">📖 Reading</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🖋 Journalism</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🎩 Classic Literature</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🎬 Movie Nights</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🍦 Ice Cream</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🍫 Chocolate Bars</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🎸 Listening to Music</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">👩🧒 Hanging out with Mom</div>
              </div>
            </div>

            <div className="shadow-2xl rounded-lg bg-white p-4 -mt-20 ml-10 lg:ml-20">
              <h3 className="font-bold mb-4">Strengths</h3>

              <div className="space-y-2">
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">📖 Reading Comprehension</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🖋 Creative Writing</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🔍 Research</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">📓 Organization</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🧠 Sustained Attention</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🎨 Creative</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">🤝 Helpful</div>
                <div className="mr-2 inline-block bg-blue-100 rounded-lg px-2 py-1 text-xs text-gray-700">❤️ Kind</div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-32 md:my-64 lg:flex items-center lg:space-x-20">
          <div className="block lg:hidden mb-10 lg:w-1/2 relative">
            <h2 className="text-5xl font-bold relative z-10">
              Collaborative Education
            </h2>

            <p className="text-2xl relative z-10">
              They say it takes a village to raise a child. We help parents and teachers work with the student during every step of their education.
            </p>

            <div className="squiggles w-48 h-48 absolute right-0 -mt-56"></div>
          </div>

          <div className="lg:w-1/2 flex flex-col">
            <div className="mr-10 lg:mr-20 shadow-2xl rounded-lg bg-white p-4">
              <h3 className="font-bold mb-4">Teachers</h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="profile profile-1 w-12 h-12 bg-gray-200 rounded-full mr-2"></div>
                    <div>Mrs. Bird</div>
                  </div>

                  <div className="flex items-center text-xs">
                    Science
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="profile profile-2 w-12 h-12 bg-gray-200 rounded-full mr-2"></div>
                    <div>Mr. Higgins</div>
                  </div>

                  <div className="flex items-center text-xs">
                    Art
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="profile profile-4 w-12 h-12 bg-gray-200 rounded-full mr-2"></div>
                    <div>Ms. Murphy</div>
                  </div>

                  <div className="flex items-center text-xs">
                    Math
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-2xl rounded-lg bg-white p-4 -mt-32 ml-10 lg:ml-20">
              <h3 className="font-bold mb-4">Your Students</h3>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="profile profile-5 w-12 h-12 bg-gray-200 rounded-full mr-2"></div>
                    <div>Tamara Morton</div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-xs mr-2 text-red-600 bg-red-200 px-2 py-1 rounded-lg">2 Tasks Overdue</span> →
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="profile profile-7 w-12 h-12 bg-gray-200 rounded-full mr-2"></div>
                    <div>Dave Rowe</div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-xs mr-2 text-gray-600 px-2 py-1 rounded-lg">No Tasks Due</span> →
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="profile profile-8 w-12 h-12 bg-gray-200 rounded-full mr-2"></div>
                    <div>Kari Hammond</div>
                  </div>

                  <div className="flex items-center">
                    <span className="text-xs mr-2 text-green-600 bg-green-200 px-2 py-1 rounded-lg">1 Tasks Due Tomorrow</span> →
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2 relative">
            <h2 className="text-5xl font-bold relative z-10">
              Collaborative Education
            </h2>

            <p className="text-2xl relative z-10">
              They say it takes a village to raise a child. We help parents and teachers work with the student during every step of their education.
            </p>

            <div className="squiggles w-48 h-48 absolute right-0 -mt-56"></div>
          </div>
        </div>

        <div className="mt-32 md:mt-64 lg:flex items-center lg:space-x-20">
          <div className="lg:w-1/2 mb-10">
            <h2 className="text-5xl font-bold relative z-10">
              Progress Made Easy
            </h2>

            <p className="text-2xl relative z-10">
              We celebrate growth. Track progress with rich portfolios and reports that show growth over time. This helps boost student self-esteem and build skills specific to their needs.
            </p>

            <div className="squiggles-purple w-48 h-48 absolute -ml-24 -mt-64"></div>
          </div>

          <div className="lg:w-1/2 flex flex-col">
            <div className="mr-10 lg:mr-20 shadow-2xl rounded-lg bg-white p-4">
              <div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center mr-4">1</div>
                  <div className="text-xs">Rory will take 10 deep breaths whenever she feels overwhelmed.</div>
                </div>

                <div className="flex justify-center w-8"><div className="ml-1 h-4 w-1 my-2 border-l border-green-600 border-dashed"></div></div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center mr-4">2</div>
                  <div className="text-xs">Rory will identify sources of frustration with I feel statements.</div>
                </div>

                <div className="flex justify-center w-8"><div className="ml-1 h-4 w-1 my-2 border-l border-green-600 border-dashed"></div></div>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center mr-4">3</div>
                  <div className="text-xs">Rory will remove herself from situations where she feels uncomfortable.</div>
                </div>
              </div>
            </div>

            <div className="shadow-2xl rounded-lg bg-white p-4 -mt-20 ml-10 lg:ml-20">
              <h3 className="font-bold mb-4">Week of March 22-28th</h3>

              <div className="text-xs border border-gray-200 rounded-lg w-full overflow-scroll">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="font-bold">
                      <th className="px-4 py-2"></th>
                      <th className="px-4 py-2">Biology</th>
                      <th className="px-4 py-2">English</th>
                      <th className="px-4 py-2">History</th>
                      <th className="px-4 py-2">Art</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="font-bold text-center px-4 py-2">Monday</td>
                      <td className="text-center"></td>
                      <td className="text-center">🎉</td>
                      <td className="text-center"></td>
                      <td className="text-center"></td>
                    </tr>

                    <tr className="bg-gray-100">
                      <td className="font-bold text-center px-4 py-2">Tuesday</td>
                      <td className="text-center">🎉</td>
                      <td className="text-center"></td>
                      <td className="text-center">🎉</td>
                      <td className="text-center"></td>
                    </tr>

                    <tr>
                      <td className="font-bold text-center px-4 py-2">Wednesday</td>
                      <td className="text-center">🎉</td>
                      <td className="text-center">🎉</td>
                      <td className="text-center"></td>
                      <td className="text-center">🎉</td>
                    </tr>

                    <tr className="bg-gray-100">
                      <td className="font-bold text-center px-4 py-2">Thursday</td>
                      <td className="text-center"></td>
                      <td className="text-center"></td>
                      <td className="text-center">🎉</td>
                      <td className="text-center"></td>
                    </tr>

                    <tr>
                      <td className="font-bold text-center px-4 py-2">Friday</td>
                      <td className="text-center">🎉</td>
                      <td className="text-center"></td>
                      <td className="text-center"></td>
                      <td className="text-center">🎉</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-10 flex items-center text-white font-bold lg:text-black lg:items-end justify-end flex-col">
        <p>Made with <span className="text-ss-pink">&#9829;</span> in Vancouver</p>
      </footer>

      <style jsx>{`
        @media (min-width: 375px) {
          header {
            height: calc(100vh - 68px);
          }
        }

        .squiggles {
          background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fb8d89' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .squiggles-purple {
          background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bd96ee' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .peep-1 {
          transform: scaleX(-1);
        }

        .peep-1 {
          top: 8rem;
          right: 0rem;
          width: 30rem;
        }

        .peep-2 {
          width: 16rem;
          right: 24rem;
        }

        .profile {
          background-position: center;
          background-size: cover;
        }

        .profile-1 {
          background-image: url("/assets/profiles/1.png");
        }

        .profile-2 {
          background-image: url("/assets/profiles/2.png");
        }

        .profile-3 {
          background-image: url("/assets/profiles/3.png");
        }

        .profile-4 {
          background-image: url("/assets/profiles/4.png");
        }

        .profile-5 {
          background-image: url("/assets/profiles/5.png");
        }

        .profile-6 {
          background-image: url("/assets/profiles/6.png");
        }

        .profile-7 {
          background-image: url("/assets/profiles/7.png");
        }

        .profile-8 {
          background-image: url("/assets/profiles/8.png");
        }
      `}</style>
    </div>
  )
}
