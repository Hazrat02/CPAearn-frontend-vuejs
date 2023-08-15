<template>
  <div>
    <p>Twitter Follower Count: {{ followerCount }}</p>
    <button @click="fetchFollowerCount">Fetch Follower Count</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      followerCount: null,
      apiKey: 'J3oX2t2EsBvNCMm4zGol0QFhd',
      apiSecret: 'CgoxQOLVeh8CztGVlQsB3jB5PGLvz3CfAYOxh6OTQ4QCJYNhRU'
    };
  },
  methods: {
    async fetchFollowerCount() {
      const basicAuth = btoa(`${this.apiKey}:${this.apiSecret}`);
      const headers = {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      };

      try {
        const response = await axios.post('https://api.twitter.com/oauth2/token', 'grant_type=client_credentials', { headers });
        const bearerToken = response.data.access_token;

        const targetUsername = 'hazratalli02';

        const userResponse = await axios.get(`https://api.twitter.com/2/users/by/username/${targetUsername}?user.fields=public_metrics`, {
          headers: {
            'Authorization': `Bearer ${bearerToken}`
          }
        });

        this.followerCount = userResponse.data.data.public_metrics.followers_count;
      } catch (error) {
        console.error('Error fetching follower count:', error);
      }
    }
  }
};
</script>