import React from "react";
import { GitHubStarCount } from "react-mower";
import DarkModeToggle from "../components/DarkModeToggle";
import libraries from '../API/Libraries.json'
import { Helmet } from "react-helmet";
import logo from '../assets/react-js.png'
import GitHubMe from "../components/GitHubMe";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>


      <Helmet>
        <title>Top UI Libraries for React</title>
        <meta
          name="description"
          content="Explore the best UI libraries for React to enhance your development experience!"
        />
        <meta
          name="keywords"
          content="React, UI Libraries, Open Source, Frontend Tools"
        />
        <meta name="author" content="Jasur Haydarov" />
        <meta property="og:title" content="Top UI Libraries for React" />
        <meta
          property="og:description"
          content="Find the top UI libraries for your React projects, including logos, stars, and forks!"
        />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/preview-image.png" />
      </Helmet>

      <div className="dark:bg-neutral-800">
        <div className="container">
          <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 p-6">

            <div className="flex items-center justify-between">
              <DarkModeToggle />
              <a target="_blank" href="https://github.com/jasurhaydarovcode/top-UI-libraries-for-REACT">
                <GitHubMe />
              </a>
            </div>

            <div>
              <Link to="/">
                <img src={logo} className="mx-auto" width={"100px"} alt="Website Logo" />
              </Link>
              <Link to="/">
                <h1 className="text-4xl font-bold text-center my-10">
                  Top UI Libraries for React
                </h1>
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg shadow-sm">
                <thead className="bg-neutral-200 dark:bg-neutral-800 border-b dark:border-neutral-700">
                  <tr>
                    <th className="px-4 py-2 text-left">Logo</th>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Website</th>
                    <th className="px-4 py-2 text-left">GitHub Stars</th>
                  </tr>
                </thead>
                <tbody>
                  {libraries.map((lib, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:border-neutral-700"
                    >
                      <td className="px-4 py-2">
                        <img src={lib.logo} alt={lib.name} className="w-12 h-12" />
                      </td>
                      <td id="selection__possible" className="px-4 py-2 font-medium">{lib.name}</td>
                      <td className="px-4 py-2">
                        <a
                          href={lib.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 dark:text-blue-400 underline"
                        >
                          Visit
                        </a>
                      </td>
                      <td className="px-4 py-2">
                        <GitHubStarCount githubStar={lib.githubRepo} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
