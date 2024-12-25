document.addEventListener('DOMContentLoaded', () => {
    const resources = [
        {
            title: "Framework to learn any new technical concept",
            description: "It will help you to learn new concept in depth along with better understanding of how the concept works.",
            link: "https://glacier-brownie-7ed.notion.site/Framework-to-learn-a-technical-concept-139ff054470a80d79c69dd0e2b571d1b?pvs=4"
        },
        {
            title: "Book Recommendation List",
            description: "It contains list of book a person should read to learn about various possibilities of life which we don't know exist and grow in their life.",
            link: "https://glacier-brownie-7ed.notion.site/Book-Recommendation-137ff054470a80dc958fe7f513551569?pvs=4"
        },
        {
            title: "List of Job, Internship Portal, Interview Prepartion",
            description: "It contains list of the platform where you can search for jobs, internship and practice for interviews by giving mock interview ",
            link: "https://glacier-brownie-7ed.notion.site/Job-and-Internship-Portals-159ff054470a8098bac5f83dcae331e4?pvs=4"
        },
        {
            title: "Web3 Resources",
            description: "It contains list of free and paid resources where you can learn about Web3 coding aspects and foundational concepts",
            link: "https://glacier-brownie-7ed.notion.site/Web3-151ff054470a80b4b323e6bf6d67656e?pvs=4"
        },
        {
            title: "Frontend Development Resources",
            description: "It contains resources for Interview Prepartion, System Design, UI Libraries, JavaScript Resources",
            link: "https://glacier-brownie-7ed.notion.site/Frontend-Development-151ff054470a802a9e79f4d1334323ca?pvs=4"
        },
        {
            title: "DSA Resources",
            description: "It contains free resources for DSA including YouTube Channels, Cheat Sheet, Roadmaps",
            link: "https://glacier-brownie-7ed.notion.site/DSA-151ff054470a80ffb8effa6db664947f?pvs=4"
        },
        {
            title: "How to Create a Digital Second Brain for yourself",
            description: "It contain resources which would introduce to the concept of Second Brain and how you can build one for yourself ",
            link: "https://glacier-brownie-7ed.notion.site/How-to-Build-a-Second-Brain-159ff054470a80c69dfed7de4e024ab9?pvs=4"
        },
        {
            title: "Interview Prepartion Resources",
            description: "It contains resources from which you can prepare for interview.",
            link: "https://glacier-brownie-7ed.notion.site/Interview-Preparation-151ff054470a802f9d6cd5d5f8b53df6?pvs=4"
        },
        {
            title: "UI-UX Resources",
            description: "It contains resources for inspiration, roadmaps, Plugins, System Design and so many more things",
            link: "https://glacier-brownie-7ed.notion.site/UI-UX-159ff054470a802fa95dcef7ed854a1e?pvs=4"
        },
        {
            title: "List of Open Source Programs",
            description: "It contains list of various open sources for which you can apply and grow in your career",
            link: "https://glacier-brownie-7ed.notion.site/Open-Source-127ff054470a80d98c18da25d0ccae64?pvs=4"
        },
    ];

    const container = document.getElementById('resource-container');

    resources.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('aria-label', resource.title);

        const title = document.createElement('h2');
        title.className = 'title';
        title.textContent = resource.title;

        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = resource.description;

        const link = document.createElement('a');
        link.className = 'link';
        link.href = resource.link;
        link.textContent = 'Visit Resource';
        link.setAttribute('aria-label', `Visit ${resource.title}`);
        link.setAttribute('target', '_blank');

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        container.appendChild(card);
    });
});