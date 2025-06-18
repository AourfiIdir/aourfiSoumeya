export default function Posts() {
    const posts = [
        {
            id: 1,
            title: "Les bienfaits de la micronutrition 🌿",
            description: "Comment les micronutriments soutiennent notre santé au quotidien.",
            link: "https://www.linkedin.com/posts/ton-post-1",
            image: "https://media.licdn.com/dummy-image1.jpg"
        },
        {
            id: 2,
            title: "Éducation à la santé : par où commencer ?",
            description: "Sensibiliser, prévenir et accompagner : les piliers de l'action.",
            link: "https://www.linkedin.com/posts/ton-post-2",
            image: "https://media.licdn.com/dummy-image2.jpg"
        },
        {
            id: 3,
            title: "Communication scientifique claire",
            description: "Traduire les données médicales pour le grand public : un vrai défi !",
            link: "https://www.linkedin.com/posts/ton-post-3",
            image: "https://media.licdn.com/dummy-image3.jpg"
        },
    ];

    return (
        <div className="linkedin-section" id="posts">
            <h1 className="linkedin-title">Mes publications LinkedIn</h1>
            <div className="linkedin-posts">
                {posts.map(post => (
                    <div key={post.id} className="linkedin-card" onClick={() => window.open(post.link, "_blank")}>
                        <img src={post.image} alt={post.title} />
                        <div className="linkedin-content">
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
