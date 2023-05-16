
---
layout: archive
title: "First-author publications"
permalink: /firstpublications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="https://ui.adsabs.harvard.edu/public-libraries/OUKtvXIFR6C-5THj23_Apw">my ADS Library</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

---
layout: archive
title: "publications"
permalink: /publications/
author_profile: true
---
