Vue.use(VueMarkdown);

Vue.component('custom-input', {
    props: ['value', 'title', 'placeholder'],
    template: `
  <div class="form-group">
    <label for="`+this.title+`">{{title}}</label>
    <input type="text" class="form-control" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" aria-describedby="`+this.title+`" v-bind:placeholder="placeholder">
  </div>
  `
})

new Vue({
    el: '#app',
    data: function () {
        return {
            forced: false,
            tab: "header",
            data: {
                title: "my name is Arturs",
                subtitle: "I am GitHub read me generator creator",
                text: "I made this project just for fun this project allows you to create nice and simple GitHub readme files that you can copy/paste as use in your profile.",

                banner: "https://arturssmirnovs.github.io/github-profile-readme-generator/images/banner.png",

                skills: "VUE JS / REACT / JS / HTML / CSS",

                working: "this page.",
                learning: "",
                collaborate: "",
                help: "",
                ask: "",
                reach: "",
                pronouns: "",
                fact: "",

                views: false,
                stats: false,

                github: "",
                dev: "",
                linkedin: "",
                facebook: "",
                instagram: "",
                twitter: "",
                codepen: "",
                stackoverflow: "",
                youtube: "",
                reddit: "",
                website: "",

                items: [],
            },
            source: this.getSource(this.data),
        };
    },
    watch: {
        data: {
            deep: true,
            handler() {
                this.forced = false;
                this.source = this.getSource(this.data);
            }
        },
    },
    mounted: function(){
        this.source = this.getSource(this.data);
        this.addItem();
    },
    methods: {
        addItem() {
            this.data.items.push({
                value: '',
                icon: ''
            });
        },
        onKeyUp(event) {
            this.forced = true;
        },
        slugify(text) {
            return text.toString().toLowerCase()
                .replace(/\s+/g, '')
                .replace(/[^\w\-]+/g, '')
                .replace(/\-\-+/g, '')
                .replace(/^-+/, '')
                .replace(/-+$/, '');
        },
        getSource: function (data) {
            let source = '';

            if (data) {

                if (data.title) {
                    source += "### Hi there 👋, "+data.title+"";
                    source += "\n";
                }
                if (data.subtitle) {
                    source += "#### "+data.subtitle+"";
                    source += "\n";
                }
                if (data.banner) {
                    source += "!["+data.subtitle+"]("+data.banner+")";
                    source += "\n";
                    source += "\n";
                }
                if (data.text) {
                    source += ""+data.text+"";
                    source += "\n";
                }
                if (data.skills) {
                    source += "\n";
                    source += "Skills: "+data.skills+"";
                    source += "\n";
                }

                source += "\n";

                if (data.working) {
                    source += "- 🔭 I’m currently working on "+data.working+" ";
                    source += "\n";
                }
                if (data.learning) {
                    source += "- 🌱 I’m currently learning "+data.learning+" ";
                    source += "\n";
                }
                if (data.collaborate) {
                    source += "- 👯 I’m looking to collaborate on "+data.collaborate+" ";
                    source += "\n";
                }
                if (data.help) {
                    source += "- 🤔 I’m looking for help with "+data.help+" ";
                    source += "\n";
                }
                if (data.ask) {
                    source += "- 💬 Ask me about "+data.ask+" ";
                    source += "\n";
                }
                if (data.reach) {
                    source += "- 📫 How to reach me: "+data.reach+" ";
                    source += "\n";
                }
                if (data.pronouns) {
                    source += "- 😄 Pronouns: "+data.pronouns+" ";
                    source += "\n";
                }
                if (data.fact) {
                    source += "- ⚡ Fun fact: "+data.fact+" ";
                    source += "\n";
                }

                source += "\n";
                source += "\n";

                if (data.github) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/"+data.github+")  ";
                }
                if (data.dev) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg' alt='dev' height='40'>](https://dev.to/"+data.dev+")  ";
                }
                if (data.linkedin) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/"+data.linkedin+"/)  ";
                }
                if (data.facebook) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg' alt='facebook' height='40'>](https://www.facebook.com/"+data.facebook+")  ";
                }
                if (data.instagram) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg' alt='instagram' height='40'>](https://www.instagram.com/"+data.instagram+"/)  ";
                }
                if (data.twitter) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg' alt='twitter' height='40'>](https://twitter.com/"+data.twitter+")  ";
                }
                if (data.codepen) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg' alt='codepen' height='40'>](https://codepen.io/"+data.codepen+")  ";
                }
                if (data.stackoverflow) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg' alt='stackoverflow' height='40'>](https://stackoverflow.com/users/"+data.stackoverflow+")  ";
                }
                if (data.youtube) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg' alt='YouTube' height='40'>](https://www.youtube.com/channel/"+data.youtube+")  ";
                }
                if (data.reddit) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/reddit.svg' alt='Reddit' height='40'>](https://www.reddit.com/user/"+data.reddit+")  ";
                }
                if (data.website) {
                    source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/icloud.svg' alt='website' height='40'>]("+data.website+")  ";
                }

                for (index = 0; index < data.items.length; ++index) {
                    if (data.items[index].icon && data.items[index].value) {
                        let icon = this.slugify(data.items[index].icon);
                        let url = data.items[index].value;
                        source += "[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/"+icon+".svg' alt='"+icon+"' height='40'>]("+url+")  ";
                    }
                }

                source += "\n";
                source += "\n";

                if (data.stats && data.github) {
                    source += "![GitHub stats](https://github-readme-stats.vercel.app/api?username="+data.github+"&show_icons=true)  ";
                    source += "\n";
                    source += "\n";
                }
                if (data.views && data.github) {
                    source += "![Profile views](https://gpvc.arturio.dev/"+data.github+")  ";
                }
            }

            return source;
        }
    }
});
