/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "726ff3dde2c47dc603fc241e4b821611"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.bbabd51c.css",
    "revision": "88d7b1b484f22591761487a68b212a82"
  },
  {
    "url": "assets/img/photo_add_access_id3_result.a3b212b3.jpg",
    "revision": "a3b212b3fc787d00d0416693ac24517a"
  },
  {
    "url": "assets/img/photo_add_access_id3.4acab96a.jpg",
    "revision": "4acab96a3352931e5388066587093805"
  },
  {
    "url": "assets/img/photo_delete_access3_result.c1324df8.jpg",
    "revision": "c1324df89e14e16f89ebb10f9bedfcf3"
  },
  {
    "url": "assets/img/photo_delete_access3.7d8bff46.jpg",
    "revision": "7d8bff466758dadb0f586253d68958e5"
  },
  {
    "url": "assets/img/photo_get_access_id2.918e351d.jpg",
    "revision": "918e351df5b7eb8ffcefb1b5726cb3a4"
  },
  {
    "url": "assets/img/photo_get_access_id3_result.a29eeac2.jpg",
    "revision": "a29eeac2580f2333ba53aec183673fdd"
  },
  {
    "url": "assets/img/photo_get_access_id3.7a59c2c7.jpg",
    "revision": "7a59c2c7674c368c73419cfc32f97d07"
  },
  {
    "url": "assets/img/photo_get_access_result.cfd7f9cb.jpg",
    "revision": "cfd7f9cb832bc170aaddce35d4ffb56e"
  },
  {
    "url": "assets/img/photo_get_all_access_aftdel_result.6c66bfb7.jpg",
    "revision": "6c66bfb73ec81a1bb191936c6bad8e87"
  },
  {
    "url": "assets/img/photo_get_all_access_aftdel.b0e7423e.jpg",
    "revision": "b0e7423ecc19616887534b6b37bb1d5c"
  },
  {
    "url": "assets/img/photo_start_server.43feda46.jpg",
    "revision": "43feda4610730a483814c49be9c29e89"
  },
  {
    "url": "assets/img/photo_update_access_id3_result.8bc630cf.jpg",
    "revision": "8bc630cf137017d38c26526fc762d6cb"
  },
  {
    "url": "assets/img/photo_update_access_id3.3dd99e74.jpg",
    "revision": "3dd99e74f870c0cfd2c15b499aad9c0f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Shema.b32c2104.png",
    "revision": "b32c2104c309d360a83d183b6c91e325"
  },
  {
    "url": "assets/js/10.1f0b2db4.js",
    "revision": "7261d191012f74783ea34f4f8a154111"
  },
  {
    "url": "assets/js/11.761036d0.js",
    "revision": "5104b01d7e7c3d4be76ab391fe200af9"
  },
  {
    "url": "assets/js/12.04791660.js",
    "revision": "ecf163b4cefceb8e30e509ee10eaaf6f"
  },
  {
    "url": "assets/js/13.ee8f951a.js",
    "revision": "e78f4f70807352d4ca3ee65e90107f6c"
  },
  {
    "url": "assets/js/14.775bab4a.js",
    "revision": "908daacddd44b81e6dc61e589148897d"
  },
  {
    "url": "assets/js/15.05531fd4.js",
    "revision": "c3e0e81e11eee26ff33697b327d5e77d"
  },
  {
    "url": "assets/js/16.647dce9c.js",
    "revision": "1b71ffdee63f9d5b50513b0a04352e4e"
  },
  {
    "url": "assets/js/17.4bbf359a.js",
    "revision": "9004ba6b01db71535c56408092264684"
  },
  {
    "url": "assets/js/18.39895f08.js",
    "revision": "5ac53d2e33ce1003bd56b1197e25fdf5"
  },
  {
    "url": "assets/js/19.bf361db6.js",
    "revision": "352fc26c171fc1e4492bf97e8d3f847c"
  },
  {
    "url": "assets/js/2.f7e06fad.js",
    "revision": "3283bb2a525974b2885bb461cad49749"
  },
  {
    "url": "assets/js/20.c946e184.js",
    "revision": "8baa0b90f7c1b8e16b76fdfb9ac334ba"
  },
  {
    "url": "assets/js/21.40620088.js",
    "revision": "a20538d7600fcb04b928cbe912186b00"
  },
  {
    "url": "assets/js/22.a684557f.js",
    "revision": "3855c4322f8c894feb0abb255c4cd0a1"
  },
  {
    "url": "assets/js/23.55245d0c.js",
    "revision": "a27173211747d20db49781cdfc667b6a"
  },
  {
    "url": "assets/js/24.3cc185a0.js",
    "revision": "cc260a2874c06a0b0e71ae15e135b65f"
  },
  {
    "url": "assets/js/26.35053981.js",
    "revision": "1469ab94686da817902ea819baa38dc5"
  },
  {
    "url": "assets/js/3.c547d339.js",
    "revision": "e62c5f4e03a5212434d1b382263a7ed0"
  },
  {
    "url": "assets/js/4.8be4e6b0.js",
    "revision": "15265fbe3845220dd0148f8cfee71157"
  },
  {
    "url": "assets/js/5.fa75b57e.js",
    "revision": "7c946c8f7872738d80c5a30bab096901"
  },
  {
    "url": "assets/js/6.e60c11e3.js",
    "revision": "283e4300049601934939998fafdfabc7"
  },
  {
    "url": "assets/js/7.af9838ca.js",
    "revision": "b115265af86bb484783115a85fbd258c"
  },
  {
    "url": "assets/js/8.8e613246.js",
    "revision": "a4074ed63215d91d6c0549f200991513"
  },
  {
    "url": "assets/js/9.0614776e.js",
    "revision": "c48ae9c021dad69db8eb1733ce4da018"
  },
  {
    "url": "assets/js/app.b55374ab.js",
    "revision": "d49daea8fe72fcd6e111284a7333b645"
  },
  {
    "url": "conclusion/index.html",
    "revision": "713e14a0d80eff0176b7cbde27aea2a3"
  },
  {
    "url": "design/index.html",
    "revision": "e16701324aa11011f3fffef3fa1318c6"
  },
  {
    "url": "index.html",
    "revision": "ca8d8f21b8fbc215d0728ac148ea7249"
  },
  {
    "url": "intro/index.html",
    "revision": "a2afe62587a0df03b5da4091a643befa"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "06d2292373153a65a183b9c1cc8adf7b"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "ba841c4dc0715b7b5cbe28c8c9dfdeb4"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9f5d797beda14acdcfefa0d4c49a4da1"
  },
  {
    "url": "software/index.html",
    "revision": "7f8ed8801244a47b02574425a57b0086"
  },
  {
    "url": "test/index.html",
    "revision": "c3c8ad74c70a1fd85cec341b4f2635ae"
  },
  {
    "url": "use cases/index.html",
    "revision": "6750eb84cf2a28026cbf03311ef02e11"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
