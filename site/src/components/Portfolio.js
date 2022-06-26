import { SepDot } from "./Misc.js";

import '../App.css';

export function Portfolio() {
    return (
        <div className="Portfolio">
            <PortfolioTitle />
            <GithubPins />
        </div>
    )
};

function PortfolioTitle() {
    return (
        <div className="PortfolioTitle">
            <SepDot /> 
            <div>Projects</div>
        </div>
    )
};

function GithubPins() {
    return (
        <div className="PortfolioWidgets">
            <a href="https://github.com/STR-Coding-Club/RobCoin" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=STR-Coding-Club&repo=RobCoin" alt="RobCoin" />
            </a>
            <a href="https://github.com/SchoolDuleApp/SchoolDule" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=SchoolDuleApp&repo=SchoolDule" alt="SchoolDule" />
            </a>
            <a href="https://gist.github.com/Ti1mmy/03a35f7816a1a3ba7c00df52d2bf80d0" target="_blank" rel="noopener noreferrer">
                <img id="github-pin-custom" src={process.env.PUBLIC_URL + "./resources/portfolioGeneratorGist.png"} alt="portfolioGenerator" />
            </a>
            <a href="https://github.com/Ti1mmy/personal-website" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=personal-website" alt="personal-website" />
            </a>
            <a href="https://github.com/Ti1mmy/DiscardApp" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=DiscardApp" alt="DiscardApp" />
            </a>
            <a href="https://github.com/Ti1mmy/CheckinWithme" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=CheckinWithme" alt="CheckinWithme" />
            </a>
            <a href="https://github.com/Finn-Discord-Bot/finn" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Finn-Discord-Bot&repo=Finn" alt="Finn" />
            </a>
            <a href="https://github.com/Ti1mmy/finance-utils" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=finance-utils" alt="Finance Utils" />
            </a>
            <a href="https://github.com/ICS2O-Gallo/10c-cpt-timothy-and-nicholas" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=ICS2O-Gallo&repo=10c-cpt-timothy-and-nicholas" alt="DiscardApp" />
            </a>
            <a href="https://github.com/Ti1mmy/Seeded-Team-Generator" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=Seeded-Team-Generator" alt="Seeded-Team-Generator" />
            </a>
            <a href="https://github.com/Ti1mmy/DiscordPykuBot" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=DiscordPykuBot" alt="Discord Haiku Bot" />
            </a>
            <a href="https://github.com/Ti1mmy/Monte-Carlo-Pi-Approximation" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=Monte-Carlo-Pi-Approximation" alt="Monte-Carlo-Pi-Approximation" />
            </a>
            <a href="https://github.com/Ti1mmy/TOHACKS-SARS-CoV2_Simulation" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=TOHACKS-SARS-CoV2_Simulation" alt="Covid19 Visualizer - Hackathon Submission" />
            </a>
            <a href="https://github.com/Ti1mmy/PixelWikiScraper" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=PixelWikiScraper" alt="PixelWikiScraper" />
            </a>
            <a href="https://github.com/Ti1mmy/advent-of-code-solutions" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=advent-of-code-solutions" alt="advent-of-code-solutions" />
            </a>
            <a href="https://github.com/Ti1mmy/competitive-coding" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=competitive-coding" alt="competitive-coding" />
            </a>
            <a href="https://github.com/Ti1mmy/sorting-algorithms" target="_blank" rel="noopener noreferrer">
                <img id="github-pin" src="https://github-readme-stats.vercel.app/api/pin/?username=Ti1mmy&repo=sorting-algorithms" alt="sorting-algorithms" />
            </a>
        </div>
    )
}




