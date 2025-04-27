
<script>
    import github from '../assets/github.svg';
    import instagram from '../assets/instagram.svg';
    import email from '../assets/email.svg';
</script>

<header>
    <p class="name">Samuel Gröner</p>
    <p class="location">Ulm - Germany</p>
    <p class="dev-type">Fullstack Developer</p>
    <div class="socials">
        <a href="github"><img src={github} alt="GitHub"></a>
        <a href="email"><img src={email} alt="Email"></a>
        <a href="instagram"><img src={instagram} alt="Instagram"></a>
    </div>
</header>

<style>
    header{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
    .name{
        font-size: 3em;
        color: var(--on-background);
    }
    .location{
        font-size: 1em;
        color: var(--on-background);
    }
    .dev-type{
        font-size: 1em;
        color: var(--on-background);
    
    }
    .socials{
        margin: 0.1em
    }
    img{
        width: 1.5em;
        height: 1.5em;
        filter: invert();
        margin: 0.1em;
    }
</style>