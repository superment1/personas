<template>
  <section id="fb-comments">
    <h2 v-if="totalComments" class="fb-heading">
      <b>{{ totalComments }} comentários</b>
      <small> - Exibindo os {{ visibleComments }} mais relevantes</small>
    </h2>

    <h1 style="font-family: 'Roboto', sans-serif;" class="border-[#222] font-bold border text-[#222] border-b-0 py-2 px-[14px] text-[14px]">Comments</h1>
    <div class="comments-container">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="comment"
        :class="{ answer: comment.isAnswer }"
      >
        <img
          v-if="comment.avatar"
          class="user-avatar"
          :src="comment.avatar"
          :alt="`Avatar de ${comment.name}`"
          loading="lazy"
        />

        <div class="comment-data">
          <p class="name">{{ comment.name }}</p>
          <div class="user">            
            <p class="text">{{ comment.text }}</p>
          </div>

          <!-- Imagem extra dentro do comentário (opcional) -->
          <img
            v-if="comment.extraImage"
            :src="comment.extraImage"
            alt=""
            loading="lazy"
          />

          <div class="buttons">
            <span
              class="like-btn"
              :class="{ liked: comment.isLiked }"
              @click="toggleLike(comment)"
            >
              {{ comment.isLiked ? 'Unlike' : 'Like' }}
            </span>
            <span>·</span>
            <span class="answer-btn">Reply</span>
            <span>·</span>
            <time>{{ comment.time }}</time>
          </div>
        </div>

        <div class="likes-count">
          {{ comment.likes }}
        </div>
      </div>

      <!-- div “vazia” que você tinha no final — pode remover se não quiser -->
      <div class="comment-data">
        <div></div>
      </div>
    </div>

    <!-- <h4 class="comments-closed">
      Este conteúdo não recebe mais comentários.
    </h4> -->
  </section>
</template>

<script>
export default {
  name: 'FbComments',

  data() {
    return {
      totalComments: 0,
      visibleComments: 10,
      comments: [
        {
          id: '1',
          name: 'Patricia Williams',
          avatar: '',
          text: 'It’s incredible how finally understanding what’s happening inside the nerves can change everything. I’ve been struggling for years, and this video made me feel seen. I really hope more people watch this.',
          time: '1 min',
          likes: 22,
          isAnswer: false,
          extraImage: 'https://123123.com/img/pri.png',
          isLiked: false,
        },
        {
          id: '2',
          name: 'Linda Kovács',
          avatar: '',
          text: 'I’m sharing this with my dad right now. His neuropathy has gotten worse these past months, and finding something that actually explains the real cause gave me so much hope. I’m definitely digging deeper into this.',
          time: '1 min',
          likes: 73,
          isAnswer: false,
          extraImage: null,
          isLiked: false,
        },
        {
          id: '3',
          name: 'Robert Steinberg',
          avatar: '',
          text: 'This hit me hard. Some days the burning and pins-and-needles feel like they’ll never stop. Hearing that there’s a different path to recovery gave me a boost I really needed today.',
          time: '1 min',
          likes: 81,
          isAnswer: false,
          extraImage: null,
          isLiked: false,
        },
         {
          id: '4',
          name: 'Michael Johnson',
          avatar: '',
          text: 'Information like this is priceless. Understanding nerve damage and how to calm the system feels like the first real step forward. Thank you for the clarity and for giving people hope.',
          time: '1 min',
          likes: 64,
          isAnswer: false,
          extraImage: null,
          isLiked: false,
        },
         {
          id: '5',
          name: 'Carla Thompson',
          avatar: '',
          text: 'My husband could barely sleep last night because of the stabbing pain in his feet. Watching this made him emotional. For the first time he said “maybe I can get better.” That means the world to me.',
          time: '1 min',
          likes: 102,
          isAnswer: false,
          extraImage: null,
          isLiked: false,
        },
         {
          id: '6',
          name: 'Angela Morris',
          avatar: '',
          text: 'Saving this. Sending to my sister. Sending to my group. Anyone who deals with nerve pain needs to hear this. It’s the first time something actually made sense.',
          time: '1 min',
          likes: 56,
          isAnswer: false,
          extraImage: null,
          isLiked: false,
        },
         {
          id: '7',
          name: 'Elena Mikkelsen',
          avatar: '',
          text: 'I’ve been searching for something that actually explains what these burning shocks feel like. This is the first time I’ve felt understood. Sharing this with my support group.',
          time: '1 min',
          likes: 41,
          isAnswer: false,
          extraImage: null,
          isLiked: false,
        },
         {
          id: '8',
          name: 'Tomás Reinhardt',
          avatar: '',
          text: 'My mom has suffered from neuropathy for over a decade. She watched this with me and said “that’s exactly how it feels.” Thank you for giving people like her a voice.',
          time: '1 min',
          likes: 67,
          isAnswer: false,
          extraImage: null,
          isLiked: false,
        },
         {
          id: '9',
          name: 'Sarah Whitmore',
          avatar: '',
          text: 'This opened my eyes. I thought the pain in my legs was just aging, but now I understand there’s a real reason behind it. I’m relieved… and honestly, hopeful for the first time in years.',
          time: '1 min',
          likes: 29,
          isAnswer: false,
          extraImage: null,
          isLiked: false,
        },
         {
          id: '10',
          name: 'Daniel Ortiz',
          avatar: '',
          text: 'I didn’t expect to get emotional watching this, but I did. Living with nerve pain is exhausting. Hearing that there’s new science behind what we feel gives me a sense of direction again.',
          time: '1 min',
          likes: 58,
          isAnswer: false,
          extraImage: null,
          isLiked: false,
        },


        
      ],
    };
  },

  mounted() {
    // Recupera likes salvos no navegador
    const stored = localStorage.getItem('likedComments') || '[]';
    let likedIds = [];

    try {
      likedIds = JSON.parse(stored);
    } catch (e) {
      likedIds = [];
    }

    this.comments.forEach((comment) => {
      if (likedIds.includes(comment.id)) {
        comment.isLiked = true;
        // Garante que o número de likes mostrado bate com o que estava +1
        // se você quiser manter o número original, comente essa linha
        comment.likes = comment.likes + 1;
      }
    });
  },

  methods: {
    toggleLike(comment) {
      const stored = localStorage.getItem('likedComments') || '[]';
      let likedIds;

      try {
        likedIds = JSON.parse(stored);
      } catch (e) {
        likedIds = [];
      }

      if (!comment.isLiked) {
        comment.isLiked = true;
        comment.likes += 1;
        if (!likedIds.includes(comment.id)) {
          likedIds.push(comment.id);
        }
      } else {
        comment.isLiked = false;
        comment.likes -= 1;
        likedIds = likedIds.filter((id) => id !== comment.id);
      }

      localStorage.setItem('likedComments', JSON.stringify(likedIds));
    },
  },
};
</script>

<style scoped>
#fb-comments {
  font-family: "Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 13px;
  max-width: 40em;
  margin: auto;
}

.fb-heading {
  margin: 2.125em 0 0.625em;
  font-size: 1.3em;
  color: #555;
  font-weight: 400;
}

.comments-container {
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  border: 1px solid #222;
  padding: 1.25em;
}

.comment {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  max-width: 100%;
  gap: 0.625em;
}

.comment.answer {
  margin-left: 3.625em;
  max-width: calc(100% - 3.625em);
  margin-bottom: 0.75em;
}

.comment.answer + .answer {
  margin-top: -0.75em;
}

.user-avatar {
  max-width: 3em;
  max-height: 3em;
  border-radius: 1.5625em;
  object-fit: cover;
}

.comment-data {
  width: 100%;
}

.comment-data .user {
  font-weight: 400;
  color: #050505;
  border-radius: 0.75em;
  background-color: #D9D9D9;
  padding: 0.375em 0.75em 0.75em;
}

.comment-data .name {
  margin: 0;
  color: #365899;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  max-width: max-content;
}

.comment-data .user .text {
  margin: 0;
  font-weight: 400;
  font-size: 15px;
  color: #050505;
  line-height: 1;
}

.comment-data .buttons {
  margin: 0.125em 0 0 0.75em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3125em;
}

.comment-data .buttons time,
.comment-data .buttons .like-btn,
.comment-data .buttons .answer-btn,
.comment-data .buttons span {
  font-size: 0.8em;
  color: #888;
  user-select: none;
}

.like-btn {
  font-weight: 600;
  cursor: pointer;
}

.like-btn.liked {
  color: #365899;
}

.answer-btn {
  font-weight: 600;
  cursor: default;
  position: relative;
}

.answer-btn:hover::after {
  content: "Você não pode mais comentar nessa publicação.";
  position: absolute;
  left: 50%;
  top: -0.625em;
  width: 11.25em;
  background-color: #f0f2f5;
  color: #4c4c4c;
  transform: translate(-50%, -100%);
  z-index: 10;
  border-radius: 0.25em;
  padding: 0.375em;
  text-align: center;
  font-weight: 400;
  box-shadow: 0.125em 0.125em 0.5em 0.125em rgba(0, 0, 0, 0.18);
}

.answer-btn:hover::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -0.625em;
  width: 0;
  height: 0;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-top: 0.5em solid #f0f2f5;
  z-index: 11;
  transform: translateX(-50%);
  filter: drop-shadow(0 0.1875em 0.125em rgba(0, 0, 0, 0.1));
}

.likes-count {
  position: absolute;
  bottom: -0.625em;
  right: 0;
  background-color: #fff;
  border: 0.125em solid #eaebef;
  display: flex;
  align-items: center;
  font-size: 0.875em;
  line-height: 1;
  color: #888;
  border-radius: 6.25em;
  padding: 0.0625em 0.25em 0.0625em 0;
}

.likes-count::before {
  content: "";
  display: inline-block; /* necessário para width e height funcionarem */
  width: 17px;
  height: 17px;
  margin-right: 4px;
  background-image: url("../assets/like.png");
  background-size: cover;
  background-position: center;
  cursor: pointer;
  width: 15px;
  height: 15px;
}

.comments-closed {
  font-size: 0.875em;
  font-weight: 600;
  text-align: center;
  margin: 0.9375em 0 3.125em;
  color: #555;
}

@media (min-width: 576px) {
  #fb-comments {
    font-size: 16px;
  }

  .likes-count {
    bottom: 0;
  }
}
</style>
