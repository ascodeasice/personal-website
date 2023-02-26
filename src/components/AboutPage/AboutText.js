const AboutText = () => {
    return (
        // TODO: use grid to space everything evenly
        <div className="bg-maroon rounded-lg py-4 px-4 max-w-[50vw] h-[70vh] grid grid-rows-3 gap-y-4">
            <p className="text-beige whitespace-pre-wrap text-xl">I'm a college student studying in NCKU, Taiwan.
                Switching my major from EE to CS for passion.</p>
            <p className="text-beige whitespace-pre-wrap text-xl">I build projects like websites, 3D games, chat bots, and other random stuff.</p>
            <p className="text-beige whitespace-pre-wrap text-xl">Meanwhile, I'm hitting the gym, finishing a half-marathon, reaching goals, living the dream every single day.</p>
        </div>
    );
}

export default AboutText;