---
title: Support && Contact
icon: fab fa-markdown
order: 2
#cover: https://github.githubassets.com/assets/inbox-zero-86555dddc82e.svg
category:
  - documentation
---

## Contact

<Share :services="['telegram']" />
If you want to create a free account, contact sales, or have any inquiries, please contact us via X:
> Telegram: <a>https://t.me/Node1_me</a>

## Questions


###  
:::tip How Do I Keep the Connection Alive?
To keep your TCP connection to our server alive and avoid reconnecting, you can periodically send a simple request to the /ping endpoint.
> **Strategy:**

We recommend using the `/ping ` endpoint, This endpoint is lightweight, fast, and designed specifically to help maintain your connection.
```shell
GET /ping
```

:::



