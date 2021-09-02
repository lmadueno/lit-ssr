const { html } = require('lit-ntml');

function root(config) {
  return async (_, res) => {
    const { title, description } = config || {};
    const content = await /* html */ html`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>${title}</title>
          <meta name="description" content="${description}" />
          <link
            id="favicon"
            rel="icon"
            href="https://motss.app/images/icons/icon-192p.png"
            type="image/x-icon"
          />
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <script>
            if (!window.fetch) {
              var s = document.createElement('script');
              s.src = 'https://unpkg.com/whatwg-fetch@3.0.0/dist/fetch.umd.js';

              var t = document.createElement('script');
              t.src =
                'https://unpkg.com/promise-polyfill@8.1.0/dist/polyfill.min.js';

              document.head.appendChild(s);
              document.head.appendChild(t);
            }
          </script>

          <script type="module">
            import { htmlFragment as html } from 'https://unpkg.com/lit-ntml@2.6.0/dist/lit-ntml.min.js';

            async function main() {
              const d = await html\`<span>Render in browser with &lt;lit-ntml&gt;</span>\`;
              const csrEsmEl = document.body.querySelector('.csr--esm');

              if (csrEsmEl) {
                csrEsmEl.innerHTML = d;
              }
            }

            main().then(console.log).catch(console.error);
          </script>

          <script src="https://unpkg.com/lit-ntml@2.6.0/dist/lit-ntml.umd.min.js"></script>
          <script>
            window.onload = function() {
              var csrUmdEl = document.body.querySelector('.csr--umd');

              if (csrUmdEl) {
                var html = window.LitNtml.htmlFragment;

                html(['<span>Render in browser with &lt;lit-ntml&gt;</span>'])
                  .then(function(d) {
                    csrUmdEl.innerHTML = d;
                  })
                  .catch(function(e) {
                    console.error(e);
                  });
              }
            };
          </script>
        </head>

        <body>
          <style>
            pre {
              max-height: 300px;
              padding: 16px;
              background-color: #f5f5f5;
              overflow: auto;
            }
          </style>

          <header>
            <h1>
              Simple way to SSR your content with nothing but
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
                target="_blank"
                rel="noopener noreferrer"
                >template literals</a
              >
              in modern JavaScript
            </h1>
          </header>

          <main>
            <p>It's dope, isn't it</p>

            <section>
              <img
                src="https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
              />
            </section>

            <section>
              <h2>ES Modules</h2>
              <pre class="csr--esm">Not supported</pre>
            </section>

            <section>
              <h2>UMD</h2>
              <pre class="csr--umd"></pre>
            </section>
          </main>
        </body>
      </html>
    `;

    return res.send(content);
  };
}

module.exports = { root };
