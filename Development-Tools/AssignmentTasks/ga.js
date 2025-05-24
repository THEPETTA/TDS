var Ue = Object.defineProperty;
var g = (t, a) => () => (t && (a = t((t = 0))), a);
var b = (t, a) => {
  for (var e in a) Ue(t, e, { get: a[e], enumerable: !0 });
};
var z = {};
b(z, { default: () => it });
import { html as nt } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
async function it({ weight: t = 1 }) {
  let a = "q-vs-code-version",
    e = "VS Code Version",
    o = (s) =>
      s.match(/Version:\s*Code\s*(\d+\.\d+\.\d+)/) && s.match(/OS Version:/),
    n = nt`
    <div class="mb-3">
      <p>
        Install and run Visual Studio Code. In your Terminal (or Command Prompt), type <code>code -s</code> and press
        Enter. Copy and paste the <em>entire output</em> below.
      </p>

      <label for="${a}" class="form-label">What is the output of <code>code -s</code>?</label>
      <textarea class="form-control" id="${a}" name="${a}" rows="3"></textarea>
    </div>
  `;
  return { id: a, title: e, weight: t, question: n, answer: o };
}
var Y = g(() => {});
var Q = {};
b(Q, { default: () => lt });
import { html as rt } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
async function lt({ user: t, weight: a = 1 }) {
  let e = "q-github-copilot",
    o = "GitHub Copilot Extension",
    n = (i) => {
      if (
        !i
          .trim()
          .split(/\r?\n/)
          .some((l) => /github\.copilot/i.test(l))
      )
        throw new Error("Extension github.copilot not found in your list");
      return !0;
    },
    s = rt`
    <div class="mb-3">
      <h4>Case Study: eShopCo Developer Compliance Audit</h4>
      <p>
        As part of eShopCo’s developer environment checklist, we need to confirm that all required VS Code extensions
        are installed—especially GitHub Copilot for pair programming.
      </p>
      <p><strong>Step 1:</strong> In your terminal, run:</p>
      <pre><code>code --list-extensions</code></pre>
      <p>This command outputs one extension ID per line.</p>
      <p><strong>Step 2:</strong> Copy the full list of extensions you have installed and paste it below.</p>
      <label for="${e}" class="form-label"> Paste your VS Code extension IDs (one per line): </label>
      <textarea class="form-control font-monospace" rows="8" id="${e}" name="${e}"></textarea>
    </div>
  `;
  return { id: e, title: o, weight: a, question: s, answer: n };
}
var K = g(() => {});
var X = {};
b(X, { default: () => ut });
import { html as ct } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import dt from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
async function ut({ user: t, weight: a = 1 }) {
  let e = "q-uv-http-post",
    o = "POST HTTP requests with uv",
    n = dt(`${t.email}#${e}`),
    s = "0123456789abcdef",
    i = "";
  for (let c = 0; c < 8; c++) i += s[Math.floor(n() * s.length)];
  let r = (c) => {
      let m = JSON.parse(c);
      return (
        m.headers?.Host == "httpbin.org" &&
        m.json?.email === t.email &&
        m.json?.request_id === i
      );
    },
    l = ct`
    <div class="mb-3">
      <h4>Case Study: eShopCo API Health Check</h4>
      <p>
        As part of eShopCo’s CLI health suite, you must POST a JSON payload to
        <code>https://httpbin.org/post</code> containing your <code>email</code> and a unique <code>request_id</code>.
        We’ll verify that the server echoes it back correctly.
      </p>
      <p>Run in your terminal:</p>
      <pre><code>uv run --with httpie -- http --json POST https://httpbin.org/post email=${t.email} request_id=${i}</code></pre>
      <p>
        HTTPie returns a JSON object; your payload appears under the
        <code>json</code> field.
      </p>
      <label for="${e}" class="form-label">
        Paste the <strong>full</strong> response:
      </label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: l, answer: r };
}
var Z = g(() => {});
function w(t, a) {
  let e = URL.createObjectURL(t),
    o = document.createElement("a");
  (o.href = e),
    (o.download = a),
    document.body.appendChild(o),
    o.click(),
    document.body.removeChild(o),
    URL.revokeObjectURL(e);
}
var k = g(() => {});
async function $(t) {
  let e = new TextEncoder().encode(t),
    o = await crypto.subtle.digest("SHA-256", e);
  return Array.from(new Uint8Array(o))
    .map((i) => i.toString(16).padStart(2, "0"))
    .join("");
}
var A = g(() => {});
function T(t) {
  return Array.from(
    { length: Math.floor(t() * 10) + 1 },
    () => I[Math.floor(t() * I.length)]
  ).join("");
}
function L(t, a) {
  return Array.from({ length: t }, () => {
    let e = a();
    return e < 0.8
      ? I[Math.floor((e / 0.8) * I.length)]
      : e < 0.99
      ? " "
      : `
`;
  });
}
var I,
  N = g(() => {
    I = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  });
var ee = {};
b(ee, { default: () => gt });
import { html as mt } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import { format as pt } from "https://cdn.jsdelivr.net/npm/prettier@3.4.2/+esm";
import ht from "https://cdn.jsdelivr.net/npm/prettier@3.4.2/plugins/markdown.mjs";
import { default as ft } from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
async function gt({ user: t, weight: a = 1 }) {
  let e = "q-npx-prettier",
    o = "Run command with npx",
    n = [
      "#  Badly  Formatted  Markdown    ",
      "",
      "*  This is an uneven list",
      "* With inconsistent spacing",
      "   *    And weird indentation",
      "",
      ">This quote has no space",
      ">   This one has too many",
      "",
    ].join(`
`),
    s = ft(`${t.email}#${e}`),
    i =
      n +
      `
` +
      L(300, s).join(""),
    r = new Blob([i], { type: "text/markdown" }),
    l = await pt(i, { parser: "markdown", plugins: [ht] }),
    c = await $(l),
    m = (p) => p.trim().split(/\s+/).at(0) === c,
    d = mt`
    <div class="mb-3">
      <p>Let's make sure you know how to use <code>npx</code> and <code>prettier</code>.</p>
      <p>
        Download
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${() =>
          w(r, "README.md")}>
          README.md</button
        >. In the directory where you downloaded it, make sure it is called <code>README.md</code>, and run
        <code>npx -y prettier@3.4.2 README.md | sha256sum</code>.
      </p>

      <label for="${e}" class="form-label">What is the output of the command?</label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: d, answer: m };
}
var te = g(() => {
  k();
  A();
  N();
});
var oe = {};
b(oe, { default: () => wt });
import { html as bt } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import { default as yt } from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
async function wt({ user: t, weight: a = 1 }) {
  let e = "q-use-google-sheets",
    o = "Use Google Sheets",
    n = yt(`${t.email}#${e}`),
    s = Math.floor(n() * 16),
    i = Math.floor(n() * 16),
    r = Array.from({ length: 10 }, (c, m) => s + m * i).reduce(
      (c, m) => c + m,
      0
    ),
    l = bt`
    <div class="mb-3">
      <p>
        Let's make sure you can write formulas in Google Sheets. Type this formula into Google Sheets. (It won't work in
        Excel)
      </p>
      <pre><code class="language-excel">=SUM(ARRAY_CONSTRAIN(SEQUENCE(100, 100, ${s}, ${i}), 1, 10))</code></pre>

      <label for="${e}" class="form-label">What is the result?</label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: l, answer: r };
}
var ae = g(() => {});
var ne = {};
b(ne, { default: () => xt });
import { html as vt } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import { default as se } from "https://cdn.jsdelivr.net/npm/lodash@4/+esm";
import { default as St } from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
async function xt({ user: t, weight: a = 1 }) {
  let e = "q-use-excel",
    o = "Use Excel",
    n = St(`${t.email}#${e}`),
    s = [10, 9, 13, 2, 11, 8, 16, 14, 7, 15, 5, 4, 6, 1, 3, 12],
    i = Array.from({ length: 16 }, () => Math.floor(n() * 16)),
    r = Math.floor(n() * 16) + 1,
    l = i.map((u, h) => ({ value: u, index: h })),
    m = se
      .sortBy(l, (u) => s[u.index])
      .map((u) => u.value)
      .slice(0, r),
    d = se.sum(m),
    p = vt`
    <div class="mb-3">
      <p>Let's make sure you can write formulas in Excel. Type this formula into Excel.</p>
      <p>Note: <strong>This will ONLY work in Office 365.</strong></p>

      <pre><code class="language-excel">=SUM(TAKE(SORTBY({${i.join(
        ","
      )}}, {${s.join(",")}}), 1, ${r}))</code></pre>

      <label for="${e}" class="form-label">What is the result?</label>
      <input class="form-control" id="${e}" name="${e}" />
      <p class="text-muted">
        Note: If you get <code>#NAME?</code> you have the wrong version of Excel. Find a friend for whom this works.
      </p>
    </div>
  `;
  return { id: e, title: o, weight: a, question: p, answer: d };
}
var ie = g(() => {});
var re = {};
b(re, { default: () => kt });
import { html as Ct } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import { default as $t } from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
async function kt({ user: t, weight: a = 1 }) {
  let e = "q-use-devtools",
    o = "Use DevTools",
    s = $t(`${t.email}#${e}`)().toString(36).slice(-10),
    i = Ct`
    <div class="mb-3">
      <input type="hidden" value="${s}" />
      <p>Just above this paragraph, there's a hidden input with a secret value.</p>

      <label for="${e}" class="form-label">What is the value in the hidden input?</label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: i, answer: s };
}
var le = g(() => {});
var ce = {};
b(ce, { default: () => Et });
import { html as At } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import Tt from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
async function Et({ user: t, weight: a = 1 }) {
  let e = "q-count-weekends",
    o = "Count Weekend Days",
    n = Tt(`${t.email}#${e}`),
    s = new Date("1980-01-01T00:00:00Z"),
    i = [Math.floor(n() * 4e3), Math.floor(n() * 4e3) + 1e4].sort(
      (d, p) => d - p
    ),
    [r, l] = i.map((d) => new Date(+s + d * 864e5)),
    c = 0;
  for (let d = new Date(r); d <= l; d.setDate(d.getDate() + 1)) {
    let p = d.getDay();
    (p === 0 || p === 6) && c++;
  }
  let m = At`
    <div class="mb-3">
      <h4>Case Study: eShopCo Weekend Traffic Analysis</h4>
      <p>
        You’re analyzing a date range of user activity for eShopCo’s web portal.
        To allocate weekend support staff, you need to know how many weekend days
        (Saturdays and Sundays) fall within the interval below.
      </p>
      <p>
        Date range: <strong>${r.toISOString().split("T")[0]}</strong> to
        <strong>${l.toISOString().split("T")[0]}</strong> (inclusive)
      </p>
      <label for="${e}" class="form-label">
        How many weekend days are in this range?
      </label>
      <input class="form-control" id="${e}" name="${e}" />
      <p class="text-muted">
        Weekends = Saturdays and Sundays. Count both endpoints.
      </p>
    </div>
  `;
  return {
    id: e,
    title: o,
    weight: a,
    question: m,
    answer: (d) => Number(d.trim()) === c,
  };
}
var de = g(() => {});
var ue = {};
b(ue, { default: () => It });
import { html as Ot } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import Nt from "https://cdn.jsdelivr.net/npm/jszip@3/+esm";
async function It({ user: t, weight: a = 1 }) {
  let e = "q-extract-json-zip",
    o = "Extract JSON from a ZIP",
    n = (await $(`${t.email}#${e}`)).slice(-5),
    s = (c) => c.trim() === n,
    i = new Nt();
  i.file(
    "sales.json",
    JSON.stringify({ month: "2025-04", region: "APAC", total_sales: n })
  );
  let r = await i.generateAsync({ type: "blob" }),
    l = Ot`
    <div class="mb-3">
      <h4>Case Study: eShopCo APAC Monthly Sales Verification</h4>
      <p>
        You are a data analyst at <strong>eShopCo</strong>, tasked with validating the automated sales figures for the
        <em>April 2025</em> period in our <strong>APAC</strong> region before the quarterly report is finalized.
      </p>
      <p>
        Our backend system generated a ZIP archive containing a JSON file with the key metric. Download and unzip:
        <button
          class="btn btn-sm btn-outline-primary"
          type="button"
          @click=${() => w(r, "monthly_sales.zip")}
        >
          monthly_sales.zip
        </button>
      </p>
      <p>Inside you’ll find <code>sales.json</code>, structured like:</p>
      <pre><code class="language-json">
{"{ month: "YYYY-MM", region: "RegionName", total_sales: number }"}
      </code></pre>
      <p>Confirm that the <code>total_sales</code> field matches our encrypted reference.</p>
      <label for="${e}" class="form-label">
        What is the value of <code>total_sales</code> in <code>sales.json</code>?
      </label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: l, answer: s };
}
var me = g(() => {
  A();
  k();
});
var pe = {};
b(pe, { default: () => Mt });
import { html as Lt } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import Pt from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
async function Mt({ user: t, weight: a = 1 }) {
  let e = "q-sort-filter-json",
    o = "Sort and Filter a JSON Product Catalog",
    n = Pt(`${t.email}#${e}`),
    s = (h) => h[Math.floor(n() * h.length)],
    i = ["Electronics", "Apparel", "Books", "Home", "Toys"],
    r = ["Super", "Ultra", "Eco", "Smart", "Deluxe", "Mini", "Pro"],
    l = ["Widget", "Gadget", "Device", "Kit", "Set", "Tool", "Item"],
    c = Array.from({ length: 100 }, () => ({
      category: s(i),
      price: Number((20 + n() * 180).toFixed(2)),
      name: `${s(r)} ${s(l)}`,
    })),
    m = Number((50 + n() * 100).toFixed(2)),
    d = c
      .filter((h) => h.price >= m)
      .sort(
        (h, f) =>
          h.category.localeCompare(f.category) ||
          f.price - h.price ||
          h.name.localeCompare(f.name)
      ),
    p = (h) => {
      let f = JSON.parse(h);
      if (f.length !== d.length) throw new Error("Array length mismatch");
      return f.every(
        (y, C) =>
          y.category === d[C].category &&
          y.price === d[C].price &&
          y.name === d[C].name
      );
    },
    u = Lt`
    <div class="mb-3">
      <p>
        You’re auditing an e-commerce catalog. Below is a JSON array of
        <strong>100</strong> products. Each has a <code>category</code>, <code>price</code>, and <code>name</code>.
      </p>
      <ol>
        <li>Filter out any product with <code>price &lt; ${m.toFixed(
          2
        )}</code>.</li>
        <li>
          Sort the remaining items by:
          <ul>
            <li><code>category</code> (A→Z)</li>
            <li>then <code>price</code> (highest→lowest)</li>
            <li>then <code>name</code> (A→Z)</li>
          </ul>
        </li>
        <li>Paste the final array as a single minified JSON string below.</li>
      </ol>
      <pre style="white-space: pre-wrap"><code class="language-json">
${JSON.stringify(c)}
      </code></pre>
      <label for="${e}" class="form-label"> Sorted &amp; filtered JSON: </label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: u, answer: p };
}
var he = g(() => {});
var ge = {};
b(ge, { default: () => qt });
import { html as fe } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import Rt from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
import jt from "https://cdn.jsdelivr.net/npm/jszip@3/+esm";
async function qt({ user: t, weight: a = 1 }) {
  let e = "q-compare-json",
    o = "Compare JSON Configuration Table",
    n = Rt(`${t.email}#${e}`),
    s = 200 + Math.floor(n() * 400),
    i = Array.from({ length: s }, (f, y) => `setting${y + 1}`),
    r = i.map(() => Math.floor(n() * 100)),
    l = r.map((f) => (n() < 0.9 ? f : Math.floor(n() * 100))),
    c = l.reduce((f, y, C) => f + (y !== r[C] ? 1 : 0), 0),
    m = i.map((f, y) => ({
      key: f,
      value: r[y],
      defaultValue: Math.floor(n() * 50),
      enabled: n() < 0.5,
    })),
    d = i.map((f, y) => ({
      key: f,
      value: l[y],
      defaultValue: m[y].defaultValue,
      enabled: m[y].enabled,
    })),
    p = new jt();
  p.file("config_old.json", JSON.stringify(m, null, 2)),
    p.file("config_new.json", JSON.stringify(d, null, 2));
  let u = await p.generateAsync({ type: "blob" }),
    h = fe`
    <div class="mb-3">
      <h4>Case Study: eShopCo Bulk Configuration Audit</h4>
      <p>
        eShopCo stores its service settings as JSON “tables” where each row includes:
        <code>key</code>, <code>value</code>, <code>defaultValue</code>, and an <code>enabled</code> flag. After a
        recent update, you need to verify which settings actually changed their <code>value</code>.
      </p>
      <p>
        Download and unzip:
        <button class="btn btn-sm btn-outline-primary" @click=${() =>
          w(u, "configs.zip")}>
          configs.zip
        </button>
        containing two files:
        <code>config_old.json</code> and <code>config_new.json</code>, each an array of ${s} objects like:
      </p>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>key</th>
            <th>value</th>
            <th>defaultValue</th>
            <th>enabled</th>
          </tr>
        </thead>
        <tbody>
          ${m.slice(0, 5).map(
            (f) => fe` <tr>
              <td>${f.key}</td>
              <td>${f.value}</td>
              <td>${f.defaultValue}</td>
              <td>${f.enabled}</td>
            </tr>`
          )}
          <tr>
            <td colspan="4">…</td>
          </tr>
        </tbody>
      </table>
      <label for="${e}" class="form-label">
        How many settings have a different <code>value</code> between the two files?
      </label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return {
    id: e,
    title: o,
    weight: a,
    question: h,
    answer: (f) => Number(f.trim()) === c,
  };
}
var be = g(() => {
  k();
});
var ye = {};
b(ye, { default: () => Jt });
import { html as Dt } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import { default as _t } from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
async function Jt({ user: t, weight: a = 1.5 }) {
  let e = "q-multi-cursor-json",
    o = "Multi-cursor edits to convert to JSON",
    n = _t(`${t.email}#${e}`),
    s = Object.fromEntries(Array.from({ length: 100 }, () => [T(n), T(n)])),
    i = Object.entries(s).map(([c, m]) => `${c}=${m}`).join(`
`),
    r = await $(JSON.stringify(s)),
    l = Dt`
    <p>
      Download
      <button
        class="btn btn-sm btn-outline-primary"
        type="button"
        @click=${() => w(new Blob([i], { type: "text/plain" }), `${e}.txt`)}
      >
        ${e}.txt
      </button>
      and use <a href="https://youtu.be/4lssq0zYxv0">multi-cursors</a> and convert it into a single JSON object, where
      <code>key=value</code> pairs are converted into <code>{key: value, key: value, ...}</code>.
    </p>
    <div class="mb-3">
      <label for="${e}" class="form-label"
        >What's the result when you paste the JSON at
        <a href="https://tools-in-data-science.pages.dev/jsonhash">tools-in-data-science.pages.dev/jsonhash</a> and
        click the Hash button?</label
      >
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: l, answer: r };
}
var we = g(() => {
  N();
  k();
  A();
});
var Se = {};
b(Se, { default: () => Bt });
import { html as ve } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import Ut from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
async function Bt({ user: t, weight: a = 1 }) {
  let e = "q-css-selectors-sum",
    o = "CSS: Featured-Sale Discount Sum",
    n = Ut(`${t.email}#${e}`),
    s = 20,
    i = [
      "featured sale",
      "sale featured",
      "sale",
      "featured",
      "on-sale",
      "featured new",
      "sale vip",
      "featured sale vip",
      "vip sale",
      "new",
    ],
    r = Array.from({ length: s }, () => i[Math.floor(n() * i.length)]),
    l = Array.from({ length: s }, () => Math.floor(n() * 46) + 5),
    c = l
      .filter((d, p) => {
        let u = r[p].split(/\s+/);
        return u.includes("featured") && u.includes("sale");
      })
      .reduce((d, p) => d + p, 0),
    m = ve`
    <div class="mb-3">
      <h4>Case Study: eShopCo Promotional Audit</h4>
      <p>
        eShopCo wants to verify that all <em>featured sale</em> products are correctly tagged in the front-end. Inspect
        the hidden product list below—each <code>&lt;li&gt;</code> represents a product with its promotional classes and
        a <code>data-discount</code> (percentage).
      </p>
      <ul class="products d-none">
        ${r.map((d, p) => ve`<li class="${d}" data-discount="${l[p]}"></li>`)}
      </ul>
      <p>
        Using a single CSS selector that targets elements with both
        <code>featured</code> and <code>sale</code> classes, calculate the <strong>sum</strong> of their
        <code>data-discount</code> values.
      </p>
      <label for="${e}" class="form-label"> Sum of discounts on <code>.featured.sale</code> items: </label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return {
    id: e,
    title: o,
    weight: a,
    question: m,
    answer: (d) => Number(d.trim()) === c,
  };
}
var xe = g(() => {});
var $e = {};
b($e, { default: () => Yt });
import { html as Gt } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import { default as Wt } from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
import Vt from "https://cdn.jsdelivr.net/npm/jszip@3/+esm";
function Ht(t) {
  let a = [];
  for (let e = 0; e < t.length; e++) a.push(Ft[t[e]]);
  return new Uint8Array(a);
}
function zt(t, a = !0) {
  let e = a ? 65279 : 65534,
    o = new ArrayBuffer((t.length + 1) * 2),
    n = new DataView(o);
  n.setUint16(0, e, a);
  for (let s = 0; s < t.length; s++)
    n.setUint16((s + 1) * 2, t.charCodeAt(s), a);
  return o;
}
async function Yt({ user: t, weight: a = 1 }) {
  let e = "q-unicode-data",
    o = "Process files with different encodings",
    n = Wt(`${t.email}#${e}`),
    s = Object.values(Ce),
    i = () => Array.from({ length: 500 }, () => Math.floor(n() * s.length)),
    [r, l, c] = [i(), i(), i()],
    m = r.map((S, x) => `${s[S]},${x}`).join(`\r
`),
    d = l.map((S, x) => `${s[S]},${x}`).join(`
`),
    p = c.map((S, x) => `${s[S]}	${x}`).join(`
`),
    u = new Set(r.slice(0, 3).map((S) => s[S])),
    h = new Vt();
  h.file(
    "data1.csv",
    Ht(`symbol,value\r
${m}`)
  ),
    h.file(
      "data2.csv",
      `symbol,value
${d}`
    ),
    h.file(
      "data3.txt",
      zt(`symbol	value
${p}`)
    );
  let f = await h.generateAsync({ type: "blob" }),
    y =
      r.reduce((S, x, E) => S + (u.has(s[x]) ? E : 0), 0) +
      l.reduce((S, x, E) => S + (u.has(s[x]) ? E : 0), 0) +
      c.reduce((S, x, E) => S + (u.has(s[x]) ? E : 0), 0),
    C = Gt`
    <div class="mb-3">
      <p>
        Download and process the files in
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${() =>
          w(f, `${e}.zip`)}>
          ${e}.zip
        </button>
        which contains three files with different encodings:
      </p>
      <ul>
        <li><code>data1.csv</code>: CSV file encoded in CP-1252</li>
        <li><code>data2.csv</code>: CSV file encoded in UTF-8</li>
        <li><code>data3.txt</code>: Tab-separated file encoded in UTF-16</li>
      </ul>
      <p>
        Each file has 2 columns: symbol and value. Sum up all the values where the symbol matches
        <code>${[...u].join(" OR ")}</code> across all three files.
      </p>
      <label for="${e}" class="form-label">What is the sum of all values associated with these symbols?</label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: C, answer: y };
}
var Ce,
  Ft,
  ke = g(() => {
    k();
    (Ce = {
      128: "\u20AC",
      130: "\u201A",
      131: "\u0192",
      132: "\u201E",
      133: "\u2026",
      134: "\u2020",
      135: "\u2021",
      136: "\u02C6",
      137: "\u2030",
      138: "\u0160",
      139: "\u2039",
      140: "\u0152",
      142: "\u017D",
      145: "\u2018",
      146: "\u2019",
      147: "\u201C",
      148: "\u201D",
      149: "\u2022",
      150: "\u2013",
      151: "\u2014",
      152: "\u02DC",
      153: "\u2122",
      154: "\u0161",
      155: "\u203A",
      156: "\u0153",
      158: "\u017E",
      159: "\u0178",
    }),
      (Ft = (() => {
        let t = {};
        for (let a = 0; a <= 127; a++) t[String.fromCharCode(a)] = a;
        for (let [a, e] of Object.entries(Ce)) t[e] = a;
        for (let a = 160; a <= 255; a++) {
          let e = String.fromCharCode(a);
          t[e] = a;
        }
        return t;
      })());
  });
var Ae = {};
b(Ae, { default: () => Kt });
import { html as Qt } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
async function Kt({ user: t, weight: a = 1 }) {
  let e = "q-use-github",
    o = "Use GitHub",
    n = async (i) => {
      if (!new URL(i).hostname.includes("raw.githubusercontent.com"))
        throw new Error("URL should be https://raw.githubusercontent.com/...");
      let l = await fetch(i).then((c) => c.json());
      if (l.email !== t.email)
        throw new Error(
          `${JSON.stringify(l)} does not match {"email": "${t.email}"}`
        );
      return !0;
    },
    s = Qt`
    <div class="mb-3">
      <p>
        Let's make sure you know how to use GitHub.
        <a href="https://github.com/join">Create a GitHub account</a> if you don't have one. Create a new public
        repository. Commit a single JSON file called <code>email.json</code> with the value
        <code>{"email": "${t.email}"}</code> and push it.
      </p>
      <label for="${e}" class="form-label"
        >Enter the raw Github URL of <code>email.json</code> so we can verify it. (It will begin with
        <code>https://raw.githubusercontent.com/[GITHUB ID]/[REPO NAME]/...</code>.)</label
      >
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: s, answer: n };
}
var Te = g(() => {});
var Ee = {};
b(Ee, { default: () => to });
import { html as Xt } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import { default as Zt } from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
import eo from "https://cdn.jsdelivr.net/npm/jszip@3/+esm";
function P(t, a, e, o) {
  for (let n = 0; n < e; n++) t.splice(Math.floor(o() * (t.length + 1)), 0, a);
  return t;
}
async function to({ user: t, weight: a = 1 }) {
  let e = "q-replace-across-files",
    o = "Replace across files",
    n = Zt(`${t.email}#${e}`),
    s = new eo(),
    i = [];
  for (let d = 0; d < 10; d++) {
    let p = L(1e4, n);
    P(p, " IITM ", 10, n), P(p, " iitm ", 10, n), P(p, " IITm ", 10, n);
    let u =
      p
        .join("")
        .split(
          `
`
        )
        .map((h) => h.trim()).join(`
`) +
      `
`;
    i.push(u), s.file(`file${d}.txt`, u);
  }
  let r = await s.generateAsync({ type: "blob" }),
    l = await $(i.join("").replace(/iitm/gi, "IIT Madras")),
    c = (d) => d.trim().split(/\s+/).at(0) === l,
    m = Xt`
    <div class="mb-3">
      <p>
        Download
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${() =>
          w(r, `${e}.zip`)}>
          ${e}.zip
        </button>
        and unzip it into a new folder, then replace all "IITM" (in upper, lower, or mixed case) with "IIT Madras" in
        <strong>all files</strong>. Leave everything as-is - don't change the
        <a href="https://stackoverflow.com/a/39532890/100904">line endings</a>.
      </p>

      <label for="${e}" class="form-label">
        What does running <code>cat * | sha256sum</code> in that folder show in bash?
      </label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: m, answer: c };
}
var Oe = g(() => {
  A();
  k();
  N();
});
var Ne = {};
b(Ne, { default: () => ao });
import { html as oo } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
async function ao({ user: t, weight: a = 1 }) {
  let e = "q-llm-embed",
    o = "LLM CLI: Generate Embedding Vector",
    n = oo`
    <div class="mb-3">
      <h4>Case Study: eShopCo Semantic Search Prototype</h4>
      <p>
        You’re adding semantic search to eShopCo’s product catalog. As a first step, generate an embedding for the
        prompt <code>My email is ${t.email}</code> using the local <code>llm</code> CLI.
      </p>
      <p>
        Follow these steps (see
        <a href="https://llm.datasette.io/docs/cli-setup" target="_blank"> llm.datasette.io/docs/cli-setup </a>
        for full details):
      </p>
      <ol>
        <li>Install the CLI: <code>pip install llm</code> (or <code>pipx install llm</code>).</li>
        <li>Set your OpenAI key: <code>export OPENAI_API_KEY=YOUR_OPENAI_KEY</code> (or borrow from a friend).</li>
        <li>Verify installation: <code>llm --help</code>.</li>
      </ol>
      <p>Then run in your terminal:</p>
      <pre><code>llm embed -c 'My email is ${t.email}' -m 3-small</code></pre>
      <label for="${e}" class="form-label"> Paste the full JSON array output here</label>
      <textarea class="form-control font-monospace" rows="6" id="${e}" name="${e}"></textarea>
    </div>
  `;
  return {
    id: e,
    title: o,
    weight: a,
    question: n,
    answer: (i) => {
      let r = JSON.parse(i);
      if (!Array.isArray(r)) throw new Error("Expected a JSON array");
      if (r.length !== 1536)
        throw new Error(`Expected length 1536 but got ${r.length}`);
      for (let l of r)
        if (typeof l != "number" || l < -1 || l > 1)
          throw new Error("All elements must be numbers between -1 and +1");
      return !0;
    },
  };
}
var Ie = g(() => {});
var Le,
  Pe = g(() => {
    Le = (t) => {
      let a = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0,
        timeZoneName: "short",
      };
      return t.toLocaleString("en-IN", a);
    };
  });
var Me = {};
b(Me, { default: () => lo });
import { html as so } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import { default as no } from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
import { sumBy as io } from "https://cdn.jsdelivr.net/npm/lodash-es/+esm";
import ro from "https://cdn.jsdelivr.net/npm/jszip@3/+esm";
async function lo({ user: t, weight: a = 1 }) {
  let e = "q-list-files-attributes",
    o = "List files and attributes",
    n = no(`${t.email}#${e}`),
    s = new ro(),
    i = [],
    r = new Date(2024, 8, 1),
    l = r.getTimezoneOffset() * 6e4;
  for (let h = 0; h < 100; h++) {
    let f = Math.floor(n() * 1e4),
      y = "x".repeat(f),
      C = new Date(r - Math.floor(n() * 1e12));
    i.push({ name: `file${h}.txt`, size: f, date: C }),
      s.file(`file${h}.txt`, y, { date: C });
  }
  let c = i[Math.floor(n() * i.length)].size,
    m = new Date(+i[Math.floor(n() * i.length)].date + l),
    d = await s.generateAsync({ type: "blob" }),
    p = io(
      i.filter((h) => h.size >= c && h.date >= m),
      "size"
    ),
    u = so`
    <div class="mb-3">
      <p>
        Download
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${() =>
          w(d, `${e}.zip`)}>
          ${e}.zip
        </button>
        and extract it. Use <code>ls</code> with options to list all files in the folder along with their date and file
        size.
      </p>

      <label for="${e}" class="form-label">
        What's the total size of all files at least ${c} bytes large and modified on or after
        ${Le(m)}?
      </label>
      <input class="form-control" id="${e}" name="${e}" />
      <p class="text-muted">
        Don't <strong>copy</strong> from inside the ZIP file or use Windows Explorer to unzip. That destroys the
        timestamps. Extract using <code>unzip</code>, <code>7-Zip</code> or similar utilities and
        <em>check the timestamps</em>.
      </p>
    </div>
  `;
  return { id: e, title: o, weight: a, question: u, answer: p };
}
var Re = g(() => {
  k();
  Pe();
});
var je = {};
b(je, { default: () => po });
import { html as co } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import { default as uo } from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
import mo from "https://cdn.jsdelivr.net/npm/jszip@3/+esm";
async function po({ user: t, weight: a = 1 }) {
  let e = "q-move-rename-files",
    o = "Move and rename files",
    n = uo(`${t.email}#${e}`),
    s = new mo(),
    i = new Set();
  for (let p = 0; p < 3; p++) {
    let u = T(n).toLowerCase();
    for (let h = 0; h < 10; h++) {
      let f = `${T(n)}.txt`.toLowerCase();
      i.has(f) || (i.add(f), s.file(`${u}/${f}`, "x"));
    }
  }
  let r = await s.generateAsync({ type: "blob" }),
    l = [
      ...new Set(
        [...i].map(
          (p) => `${p.replace(/[0-9]/g, (u) => (parseInt(u) + 1) % 10)}:x
`
        )
      ),
    ]
      .sort()
      .join(""),
    c = await $(l),
    m = (p) => p.trim().split(/\s+/).at(0) === c,
    d = co`
    <div class="mb-3">
      <p>
        Download
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${() =>
          w(r, `${e}.zip`)}>
          ${e}.zip
        </button>
        and extract it. Use <code>mv</code> to move all files under folders into an empty folder. Then rename all files
        replacing each digit with the next. 1 becomes 2, 9 becomes 0, <code>a1b9c.txt</code> becomes
        <code>a2b0c.txt</code>.
      </p>

      <label for="${e}" class="form-label">
        What does running <code>grep . * | LC_ALL=C sort | sha256sum</code> in <code>bash</code> on that folder show?
      </label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;
  return { id: e, title: o, weight: a, question: d, answer: m };
}
var qe = g(() => {
  k();
  A();
  N();
});
var _e = {};
b(_e, { default: () => bo });
import { html as De } from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
import ho from "https://cdn.jsdelivr.net/npm/seedrandom/+esm";
import fo from "https://esm.sh/@sqlite.org/sqlite-wasm@3.46.1-build3";
import { sumBy as go } from "https://cdn.jsdelivr.net/npm/lodash-es@4/+esm";
async function bo({ user: t, weight: a = 1 }) {
  let e = "q-sql-order-average",
    o = "SQL: Average Order Value",
    n = ho(`${t.email}#${e}`),
    s = ["Shipped", "shipped", "SHIPPED", "Pending", "Cancelled", "Processing"],
    i = Array.from({ length: 1e3 }, () => {
      let u = s[Math.floor(n() * s.length)],
        h = Math.floor(n() * 9) + 1,
        f = Number((n() * 99 + 1).toFixed(2));
      return { status: u, quantity: h, unit_price: f };
    }),
    r = await fo({ printErr: console.error }),
    l = new r.oo1.DB();
  l.exec(
    "CREATE TABLE orders (status TEXT, quantity INTEGER, unit_price FLOAT)"
  );
  let c = l.prepare(
    "INSERT INTO orders (status, quantity, unit_price) VALUES (?, ?, ?)"
  );
  l.exec("BEGIN TRANSACTION");
  for (let u of i) c.bind([u.status, u.quantity, u.unit_price]).stepReset();
  l.exec("COMMIT"), c.finalize();
  let m = i.filter((u) => /shipped/i.test(u.status)),
    d = m.length > 0 ? go(m, (u) => u.quantity * u.unit_price) / m.length : 0,
    p = De`
    <div class="mb-3">
      <h4>Case Study: eShopCo Order Analytics</h4>
      <p>
        The <code>orders</code> table records each purchase with columns: <code>status</code>, <code>quantity</code>,
        and <code>unit_price</code>. You need to calculate the <strong>average order value</strong> for all orders whose
        status is <code>shipped</code> (in any casing). Order value is defined as <code>quantity * unit_price</code>.
      </p>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>status</th>
            <th>quantity</th>
            <th>unit_price</th>
          </tr>
        </thead>
        <tbody>
          ${i.slice(0, 5).map(
            (u) => De` <tr>
              <td>${u.status}</td>
              <td>${u.quantity}</td>
              <td>${u.unit_price}</td>
            </tr>`
          )}
          <tr>
            <td colspan="3">…</td>
          </tr>
        </tbody>
      </table>
      <label for="${e}" class="form-label">
        Write the SQL query that returns the average order value for
        <code>shipped</code> orders (case-insensitive).
      </label>
      <textarea class="form-control font-monospace text-bg-dark" rows="4" id="${e}" name="${e}"></textarea>
    </div>
  `;
  return {
    id: e,
    title: o,
    weight: a,
    question: p,
    answer: (u) => {
      let h = l.exec(u, { rowMode: "array" });
      if (!h.length || !h[0].length) throw new Error("Query returned no rows");
      let f = Number(h[0][0]);
      return Math.abs(f - d) < 0.01;
    },
  };
}
var Je = g(() => {});
import {
  html as O,
  render as Be,
} from "https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";
function M(t, a) {
  let e = O`<ol class="mt-3">
    ${t.map(
      ({ id: s, title: i, weight: r }) =>
        O`<li><a href="#h${s}">${i}</a> (${r} ${
          r == 1 ? "mark" : "marks"
        })</li>`
    )}
  </ol>`,
    o = [
      O`<h1 class="display-6">Questions</h1>`,
      e,
      ...t.map(
        ({ id: s, title: i, weight: r, question: l, help: c }, m) => (
          c && !Array.isArray(c) && (c = [c]),
          O`
        <div class="card my-5" data-question="${s}" id="h${s}">
          <div class="card-header">
            <span class="badge text-bg-primary me-2">${m + 1}</span>
            ${i} (${r} ${r == 1 ? "mark" : "marks"})
          </div>
          ${
            c
              ? c.map((d) => O`<div class="card-body border-bottom">${d}</div>`)
              : ""
          }
          <div class="card-body">${l}</div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-primary check-answer" data-question="${s}">Check</button>
          </div>
        </div>
      `
        )
      ),
    ],
    n = { index: e, questions: o };
  for (let [s, i] of a) Be(n[i], s);
}
import { unsafeHTML as Ge } from "https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";
import { Marked as We } from "https://cdn.jsdelivr.net/npm/marked@13/+esm";
var Ve = new We({
    renderer: {
      image(t, a, e) {
        return `<img src="${t}" alt="${e}" ${
          a ? `title="${a}"` : ""
        } class="img-fluid">`;
      },
      link(t, a, e) {
        return (
          t &&
            t.endsWith(".md") &&
            !t.startsWith("http") &&
            (t = `https://tds.s-anand.net/#/${t.replace(/\.md$/, "")}`),
          `<a href="${t}" ${
            a ? `title="${a}"` : ""
          } target="_blank" rel="noopener noreferrer">${e}</a>`
        );
      },
    },
  }),
  v = (t) => Ge(Ve.parse(t));
var R = `## Editor: VS Code

Your editor is the most important tool in your arsenal. That's where you'll spend most of your time. Make sure you're comfortable with it.

[**Visual Studio Code**](https://code.visualstudio.com/) is, _by far_, the most popular code editor today. According to the [2024 StackOverflow Survey](https://survey.stackoverflow.co/2024/technology/#1-integrated-development-environment) almost 75% of developers use it. We recommend you learn it well. Even if you use another editor, you'll be working with others who use it, and it's a good idea to have some exposure.

Watch these introductory videos (35 min) from the [Visual Studio Docs](https://code.visualstudio.com/docs) to get started:

- [Getting Started](https://code.visualstudio.com/docs/introvideos/basics): Set up and learn the basics of Visual Studio Code. (7 min)
- [Code Editing](https://code.visualstudio.com/docs/introvideos/codeediting): Learn how to edit and run code in VS Code. (3 min)
- [Productivity Tips](https://code.visualstudio.com/docs/introvideos/productivity): Become a VS Code power user with these productivity tips. (4 min)
- [Personalize](https://code.visualstudio.com/docs/introvideos/configure): Personalize VS Code to make it yours with themes. (2 min)
- [Extensions](https://code.visualstudio.com/docs/introvideos/extend): Add features, themes, and more to VS Code with extensions! (4 min)
- [Debugging](https://code.visualstudio.com/docs/introvideos/debugging): Get started with debugging in VS Code. (6 min)
- [Version Control](https://code.visualstudio.com/docs/introvideos/versioncontrol): Learn how to use Git version control in VS Code. (3 min)
- [Customize](https://code.visualstudio.com/docs/introvideos/customize): Learn how to customize your settings and keyboard shortcuts in VS Code. (6 min)
`;
var j = `## Python tools: uv

[Install uv](https://docs.astral.sh/uv/getting-started/installation/).

[\`uv\`](https://docs.astral.sh/uv/) is a fast Python package and project manager that's becoming the standard for running Python scripts. It replaces tools like pip, conda, pipx, poetry, pyenv, twine, and virtualenv into one, enabling:

- **Python Version Management**: uv installs and manages _multiple_ Python versions, allowing developers to specify and switch between versions seamlessly.
- **Virtual Environment Handling**: It automates the creation and management of virtual environments, ensuring isolated and consistent development spaces for different projects.
- **Dependency Management**: With support for the pyproject.toml format, uv enables precise specification of project dependencies. It maintains a universal lockfile, uv.lock, to ensure reproducible installations across different systems.
- **Project Execution**: The \`uv run\` command allows for the execution of scripts and applications within the managed environment, streamlining development workflows.

Here are some commonly used commands:

\`\`\`bash
# Replace python with uv. This automatically installs Python and dependencies.
uv run script.py

# Run a Python script directly from the Internet
uv run https://example.com/script.py

# Run a Python script without installing
uvx ruff

# Use a specific Python version
uv run --python 3.11 script.py

# Add dependencies to your script
uv add httpx --script script.py

# Create a virtual environment at .venv
uv venv

# Install packages to your virtual environment
uv pip install httpx
\`\`\`

Here are some useful tools you can run with \`uvx\` without installation:

\`\`\`bash
uvx --from jupyterlab jupyter-lab   # Jupyter notebook
uvx marimo      # Interactive notebook
uvx llm         # Chat with LLMs from the command line
uvx openwebui   # Chat with LLMs via the browser
uvx httpie      # Make HTTP requests
uvx datasette   # Browse SQLite databases
uvx markitdown  # Convert PDF to Markdown
uvx yt-dlp      # Download YouTube videos
uvx asciinema   # Record your terminal and play it
\`\`\`

uv uses [inline script metadata](https://packaging.python.org/en/latest/specifications/inline-script-metadata/#inline-script-metadata) for dependencies.
The eliminates the need for \`requirements.txt\` or virtual environments. For example:

\`\`\`python
# /// script
# requires-python = ">=3.11"
# dependencies = [
#   "httpx",
#   "pandas",
# ]
# ///
\`\`\`

[![uv - Python package and project management | Inline Script Metadata (28 min)](https://i.ytimg.com/vi_webp/igWlYl3asKw/sddefault.webp)](https://youtu.be/igWlYl3asKw?t=1240)

<!-- Assessment: Share output of \`uv run --with httpie -- https https://httpbin.org/get?email={email}\` -->
<!-- Assessment: Share output of \`uvx markitdown {email}.pdf\` -->
<!-- Assessment: Share output of \`uv ruff format script.py\` -->
`;
var q = `## JavaScript tools: npx

[npx](https://docs.npmjs.com/cli/v8/commands/npx) is a command-line tool that comes with npm (Node Package Manager) and allows you to execute npm package binaries and run one-off commands without installing them globally. It's essential for modern JavaScript development and data science workflows.

For data scientists, npx is useful when:

- Running JavaScript-based data visualization tools
- Converting notebooks and documents
- Testing and formatting code
- Running development servers

Here are common npx commands:

\`\`\`bash
# Run a package without installing
npx http-server .                # Start a local web server
npx prettier --write .           # Format code or docs
npx eslint .                     # Lint JavaScript
npx typescript-node script.ts    # Run TypeScript directly
npx esbuild app.js               # Bundle JavaScript
npx jsdoc .                      # Generate JavaScript docs

# Run specific versions
npx prettier@3.2 --write .        # Use prettier 3.2

# Execute remote scripts (use with caution!)
npx github:user/repo            # Run from GitHub
\`\`\`

Watch this introduction to npx (6 min):

[![What you can do with npx (6 min)](https://i.ytimg.com/vi_webp/55WaAoZV_tQ/sddefault.webp)](https://youtu.be/55WaAoZV_tQ)
`;
var D = `## Spreadsheet: Excel, Google Sheets

You'll use spreadsheets for data cleaning and exploration. The most popular spreadsheet program is [Microsoft Excel](https://www.microsoft.com/en-us/microsoft-365/excel) followed by [Google Sheets](https://www.google.com/sheets/about/).

You may be already familiar with these. If not, make sure to learn the basics of both.

Go through the [**Microsoft Excel** video training](https://support.microsoft.com/en-us/office/excel-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb) and make sure you cover:

- [Intro to Excel](https://support.microsoft.com/en-us/office/create-a-new-workbook-ae99f19b-cecb-4aa0-92c8-7126d6212a83)
- [Rows & columns](https://support.microsoft.com/en-us/office/insert-or-delete-rows-and-columns-6f40e6e4-85af-45e0-b39d-65dd504a3246)
- [Cells](https://support.microsoft.com/en-us/office/move-or-copy-cells-and-cell-contents-803d65eb-6a3e-4534-8c6f-ff12d1c4139e)
- [Formatting](https://support.microsoft.com/en-us/office/available-number-formats-in-excel-0afe8f52-97db-41f1-b972-4b46e9f1e8d2)
- [Formulas & Functions](https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173)
- [Tables](https://support.microsoft.com/en-us/office/create-and-format-tables-e81aa349-b006-4f8a-9806-5af9df0ac664)
- [PivotTables](https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576)

Watch this video for an introduction to **Google Sheets** (49 min):

[![Google Sheets Tutorial for Beginners (49 min)](https://i.ytimg.com/vi_webp/TENAbUa-R-w/sddefault.webp)](https://youtu.be/TENAbUa-R-w)
`;
var _ = `## Browser: DevTools

[Chrome DevTools](https://developer.chrome.com/docs/devtools/overview/) is the de facto standard for web development and data analysis in the browser.
You'll use this a lot when debugging and inspecting web pages.

Here are the key features you'll use most:

1. **Elements Panel**

   - Inspect and modify HTML/CSS in real-time
   - Copy CSS selectors for web scraping
   - Debug layout issues with the Box Model

   \`\`\`javascript
   // Copy selector in Console
   copy($0); // Copies selector of selected element
   \`\`\`

2. **Console Panel**

   - JavaScript REPL environment
   - Log and debug data
   - Common console methods:

   \`\`\`javascript
   console.table(data); // Display data in table format
   console.group("Name"); // Group related logs
   console.time("Label"); // Measure execution time
   \`\`\`

3. **Network Panel**
   - Monitor API requests and responses
   - Simulate slow connections
   - Right-click on a request and select "Copy as fetch" to get the request.
4. **Essential Keyboard Shortcuts**
   - \`Ctrl+Shift+I\` (Windows) / \`Cmd+Opt+I\` (Mac): Open DevTools
   - \`Ctrl+Shift+C\`: Select element to inspect
   - \`Ctrl+L\`: Clear console
   - \`$0\`: Reference currently selected element
   - \`$$('selector')\`: Query selector all (returns array)

Videos from Chrome Developers (37 min total):

- [Fun & powerful: Intro to Chrome DevTools](https://youtu.be/t1c5tNPpXjs) (5 min)
- [Different ways to open Chrome DevTools](https://youtu.be/X65TAP8a530) (5 min)
- [Faster DevTools navigation with shortcuts and settings](https://youtu.be/xHusjrb_34A) (3 min)
- [How to log messages in the Console](https://youtu.be/76U0gtuV9AY) (6 min)
- [How to speed up your workflow with Console shortcuts](https://youtu.be/hdRDTj6ObiE) (6 min)
- [HTML vs DOM? Let\u2019s debug them](https://youtu.be/J-02VNxE7lE) (5 min)
- [Caching demystified: Inspect, clear, and disable caches](https://youtu.be/mSMb-aH6sUw) (7 min)
- [Console message logging](https://youtu.be/76U0gtuV9AY) (6 min)
- [Console workflow shortcuts](https://youtu.be/hdRDTj6ObiE) (6 min)
- [HTML vs DOM debugging](https://youtu.be/J-02VNxE7lE) (5 min)
- [Cache inspection and management](https://youtu.be/mSMb-aH6sUw) (7 min)
`;
var J = `## JSON

JSON (JavaScript Object Notation) is the de facto standard format for data exchange on the web and APIs. Its human-readable format and widespread support make it essential for data scientists working with web services, APIs, and configuration files.

For data scientists, JSON is essential when:

- Working with REST APIs and web services
- Storing configuration files and metadata
- Parsing semi-structured data from databases like MongoDB
- Creating data visualization specifications (e.g., Vega-Lite)

Watch this comprehensive introduction to JSON (15 min):

[![JSON Crash Course](https://i.ytimg.com/vi_webp/GpOO5iKzOmY/sddefault.webp)](https://youtu.be/GpOO5iKzOmY)

Key concepts to understand in JSON:

- JSON only supports 6 data types: strings, numbers, booleans, null, arrays, and objects
- You can nest data. Arrays and objects can contain other data types, including other arrays and objects
- Always validate. Ensure JSON is well-formed. Comm errors: Trailing commas, missing quotes, and escape characters

[JSON Lines](https://jsonlines.org/) is a format that allows you to store multiple JSON objects in a single line.
It's useful for logging and streaming data.

Tools you could use with JSON:

- [JSONLint](https://jsonlint.com/): Validate and format JSON
- [JSON Editor Online](https://jsoneditoronline.org/): Visual JSON editor and formatter
- [JSON Schema](https://json-schema.org/): Define the structure of your JSON data
- [jq](https://stedolan.github.io/jq/): Command-line JSON processor

Common Python operations with JSON:

\`\`\`python
import json

# Parse JSON string
json_str = '{"name": "Alice", "age": 30}'
data = json.loads(json_str)

# Convert to JSON string
json_str = json.dumps(data, indent=2)

# Read JSON from file
with open('data.json') as f:
    data = json.load(f)

# Write JSON to file
with open('output.json', 'w') as f:
    json.dump(data, f, indent=2)

# Read JSON data a Pandas DataFrame. JSON data is typically stored as an array of objects.
import pandas as pd
df = pd.read_json('data.json')

# Read JSON lines from file into a DataFrame. JSON lines are typically one line per object.
df = pd.read_json('data.jsonl', lines=True)
\`\`\`

Practice JSON skills with these resources:

- [JSON Generator](https://json-generator.com/): Create sample JSON data
- [JSON Path Finder](https://jsonpathfinder.com/): Learn to navigate complex JSON structures
- [JSON Schema Validator](https://www.jsonschemavalidator.net/): Validate JSON against schemas
`;
var U = `## CSS Selectors

CSS selectors are patterns used to select and style HTML elements on a web page. They are fundamental to web development and data scraping, allowing you to precisely target elements for styling or extraction.

For data scientists, understanding CSS selectors is crucial when:

- Web scraping with tools like Beautiful Soup or Scrapy
- Selecting elements for browser automation with Selenium
- Styling data visualizations and web applications
- Debugging website issues using browser DevTools

Watch this comprehensive introduction to CSS selectors (20 min):

[![Learn Every CSS Selector In 20 Minutes (20 min)](https://i.ytimg.com/vi_webp/l1mER1bV0N0/sddefault.webp)](https://youtu.be/l1mER1bV0N0)

The Mozilla Developer Network (MDN) provides detailed documentation on the three main types of selectors:

- [Basic CSS selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors): Learn about element (\`div\`), class (\`.container\`), ID (\`#header\`), and universal (\`*\`) selectors
- [Attribute selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors): Target elements based on their attributes or attribute values (\`[type="text"]\`)
- [Combinators](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators): Use relationships between elements (\`div > p\`, \`div + p\`, \`div ~ p\`)

Practice your CSS selector skills with this interactive tool:

- [CSS Diner](https://flukeout.github.io/): A fun game that teaches CSS selectors through increasingly challenging levels
`;
var B = `## Unicode

Ever noticed when you copy-paste some text and get garbage symbols? Or see garbage when you load a CSV file? This video explains why. It covers how computers store text (called character encoding) and why it sometimes goes wonky.

Learn about ASCII (the original 7-bit encoding system that could only handle 128 characters), why that wasn't enough for global languages, and how modern solutions like Unicode save the day by letting us use any character from any language.

Some programs try to guess encodings (sometimes badly!). A signature called BOM (Byte Order Mark)helps computers know exactly how to read text files correctly.

Learn how Unicode, UTF-8 and character encoding works. This is a common gotcha when building apps that handle international text - something bootcamps often skip but developers and data scientists regularly face in the real world.

Unicode is fundamental for data scientists working with international data. Here are key concepts you need to understand:

- **Character Encodings**: Different ways to represent text in computers
  - ASCII (7-bit): Limited to 128 characters, English-only
  - UTF-8: Variable-width encoding, backwards compatible with ASCII
  - UTF-16: Fixed-width encoding, used in Windows and Java
  - UTF-32: Fixed-width encoding, memory inefficient but simple

Common encoding issues you'll encounter:

\`\`\`python
# Reading files with explicit encoding
with open('file.txt', encoding='utf-8') as f:
    text = f.read()

# Handling encoding errors
import pandas as pd
df = pd.read_csv('data.csv', encoding='utf-8', errors='replace')

# Detecting file encoding
import chardet
with open('unknown.txt', 'rb') as f:
    result = chardet.detect(f.read())
print(result['encoding'])
\`\`\`

[![Code Pages, Character Encoding, Unicode, UTF-8 and the BOM - Computer Stuff They Didn't Teach You #2 (17 min)](https://i.ytimg.com/vi_webp/jeIBNn5Y5fI/sddefault.webp)](https://youtu.be/jeIBNn5Y5fI)
`;
var G = `## Terminal: Bash

UNIX shells are the de facto standard in the data science world and [Bash](https://www.gnu.org/software/bash/) is the most popular.
This is available by default on Mac and Linux.

On Windows, install [Git Bash](https://git-scm.com/downloads) or [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) to get a UNIX shell.

Watch this video to install WSL (12 min).

[![How to Install Ubuntu on Windows 10 (WSL) (12 min)](https://i.ytimg.com/vi_webp/X-DHaQLrBi8/sddefault.webp)](https://youtu.be/X-DHaQLrBi8)

Watch this video to understand the basics of Bash and UNIX shell commands (75 min).

[![Beginner's Guide to the Bash Terminal (75 min)](https://i.ytimg.com/vi_webp/oxuRxtrO2Ag/sddefault.webp)](https://youtu.be/oxuRxtrO2Ag)

Essential Commands:

\`\`\`bash
# File Operations
ls -la               # List all files with details
cd path/to/dir       # Change directory
pwd                  # Print working directory
cp source dest       # Copy files
mv source dest       # Move/rename files
rm -rf dir           # Remove directory recursively

# Text Processing
grep "pattern" file  # Search for pattern
sed 's/old/new/' f   # Replace text
awk '{print $1}' f   # Process text by columns
cat file | wc -l     # Count lines

# Process Management
ps aux               # List processes
kill -9 PID          # Force kill process
top                  # Monitor processes
htop                 # Interactive process viewer

# Network
curl url             # HTTP requests
wget url             # Download files
nc -zv host port     # Test connectivity
ssh user@host        # Remote login

# Count unique values in CSV column
cut -d',' -f1 data.csv | sort | uniq -c

# Quick data analysis
awk -F',' '{sum+=$2} END {print sum/NR}' data.csv  # Average
sort -t',' -k2 -n data.csv | head                  # Top 10

# Monitor log in real-time
tail -f log.txt | grep --color 'ERROR'
\`\`\`

Bash Scripting Essentials:

\`\`\`bash
#!/bin/bash

# Variables
NAME="value"
echo $NAME

# Loops
for i in {1..5}; do
    echo $i
done

# Conditionals
if [ -f "file.txt" ]; then
    echo "File exists"
fi

# Functions
process_data() {
    local input=$1
    echo "Processing $input"
}
\`\`\`

Productivity Tips:

1. **Command History**

   \`\`\`bash
   history         # Show command history
   Ctrl+R         # Search history
   !!             # Repeat last command
   !$             # Last argument
   \`\`\`

2. **Directory Navigation**

   \`\`\`bash
   pushd dir      # Push directory to stack
   popd           # Pop directory from stack
   cd -           # Go to previous directory
   \`\`\`

3. **Job Control**

   \`\`\`bash
   command &      # Run in background
   Ctrl+Z         # Suspend process
   bg             # Resume in background
   fg             # Resume in foreground
   \`\`\`

4. **Useful Aliases** - typically added to \`~/.bashrc\`
   \`\`\`bash
   alias ll='ls -la'
   alias gs='git status'
   alias jupyter='jupyter notebook'
   alias activate='source venv/bin/activate'
   \`\`\`
`;
var W = `## Version Control: Git, GitHub

[Git](https://git-scm.com/) is the de facto standard for version control of software (and sometimes, data as well). It's a system that keeps track of changes you make to files and folders. It allows you to revert to a previous state, compare changes, etc. It's a central tool in any developer's workflow.

[GitHub](https://github.com/) is the most popular hosting service for Git repositories. It's a website that shows your code, allows you to collaborate with others, and provides many useful tools for developers.

Watch these introductory videos to learn the basics of Git and GitHub (98 min):

[![Git Tutorial for Beginners: Command-Line Fundamentals (30 min)](https://i.ytimg.com/vi_webp/HVsySz-h9r4/sddefault.webp)](https://youtu.be/HVsySz-h9r4)

[![Git and GitHub for Beginners - Crash Course (68 min)](https://i.ytimg.com/vi_webp/RGOj5yH7evk/sddefault.webp)](https://youtu.be/RGOj5yH7evk)

Essential Git Commands:

\`\`\`bash
# Repository Setup
git init                   # Create new repo
git clone url              # Clone existing repo
git remote add origin url  # Connect to remote

# Basic Workflow
git status                 # Check status
git add .                  # Stage all changes
git commit -m "message"    # Commit changes
git push origin main       # Push to remote

# Branching
git branch                 # List branches
git checkout -b feature    # Create/switch branch
git merge feature          # Merge branch
git rebase main            # Rebase on main

# History
git log --oneline          # View history
git diff commit1 commit2   # Compare commits
git blame file             # Show who changed what
\`\`\`

Best Practices:

1. **Commit Messages**

   \`\`\`bash
   # Good commit message format
   type(scope): summary

   Detailed description of changes.

   # Examples
   feat(api): add user authentication
   fix(db): handle null values in query
   \`\`\`

2. **Branching Strategy**

   - main: Production code
   - develop: Integration branch
   - feature/\\*: New features
   - hotfix/\\*: Emergency fixes

3. **Code Review**
   - Keep PRs small (<400 lines)
   - Use draft PRs for WIP
   - Review your own code first
   - Respond to all comments

Essential Tools

- [GitHub Desktop](https://desktop.github.com/): GUI client
- [GitLens](https://gitlens.amod.io/): VS Code extension
- [gh](https://cli.github.com/): GitHub CLI
- [pre-commit](https://pre-commit.com/): Git hooks
`;
var V = `## Database: SQLite

Relational databases are used to store data in a structured way. You'll often access databases created by others for analysis.

PostgreSQL, MySQL, MS SQL, Oracle, etc. are popular databases. But the most installed database is [SQLite](https://www.sqlite.org/index.html). It's embedded into many devices and apps (e.g. your phone, browser, etc.). It's lightweight but very scalable and powerful.

Watch these introductory videos to understand SQLite and how it's used in Python (34 min):

[![SQLite Introduction - Beginners Guide to SQL and Databases (22 min)](https://i.ytimg.com/vi_webp/8Xyn8R9eKB8/sddefault.webp)](https://youtu.be/8Xyn8R9eKB8)

[![SQLite Backend for Beginners - Create Quick Databases with Python and SQL (13 min)](https://i.ytimg.com/vi_webp/Ohj-CqALrwk/sddefault.webp)](https://youtu.be/Ohj-CqALrwk)

There are many non-relational databases (NoSQL) like [ElasticSearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html), [MongoDB](https://www.mongodb.com/docs/manual/), [Redis](https://redis.io/docs/latest/), etc. that you should know about and we may cover later.

Core Concepts:

\`\`\`sql
-- Create a table
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert data
INSERT INTO users (name, email) VALUES
    ('Alice', 'alice@example.com'),
    ('Bob', 'bob@example.com');

-- Query data
SELECT name, COUNT(*) as count
FROM users
GROUP BY name
HAVING count > 1;

-- Join tables
SELECT u.name, o.product
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.status = 'pending';
\`\`\`

Python Integration:

\`\`\`python
import sqlite3
from pathlib import Path
import pandas as pd

async def query_database(db_path: Path, query: str) -> pd.DataFrame:
    """Execute SQL query and return results as DataFrame.

    Args:
        db_path: Path to SQLite database
        query: SQL query to execute

    Returns:
        DataFrame with query results
    """
    try:
        conn = sqlite3.connect(db_path)
        return pd.read_sql_query(query, conn)
    finally:
        conn.close()

# Example usage
db = Path('data.db')
df = await query_database(db, '''
    SELECT date, COUNT(*) as count
    FROM events
    GROUP BY date
''')
\`\`\`

Common Operations:

1. **Database Management**

   \`\`\`sql
   -- Backup database
   .backup 'backup.db'

   -- Import CSV
   .mode csv
   .import data.csv table_name

   -- Export results
   .headers on
   .mode csv
   .output results.csv
   SELECT * FROM table;
   \`\`\`

2. **Performance Optimization**

   \`\`\`sql
   -- Create index
   CREATE INDEX idx_user_email ON users(email);

   -- Analyze query
   EXPLAIN QUERY PLAN
   SELECT * FROM users WHERE email LIKE '%@example.com';

   -- Show indexes
   SELECT * FROM sqlite_master WHERE type='index';
   \`\`\`

3. **Data Analysis**

   \`\`\`sql
   -- Time series aggregation
   SELECT
       date(timestamp),
       COUNT(*) as events,
       AVG(duration) as avg_duration
   FROM events
   GROUP BY date(timestamp);

   -- Window functions
   SELECT *,
       AVG(amount) OVER (
           PARTITION BY user_id
           ORDER BY date
           ROWS BETWEEN 3 PRECEDING AND CURRENT ROW
       ) as moving_avg
   FROM transactions;
   \`\`\`

Tools to work with SQLite:

- [SQLiteStudio](https://sqlitestudio.pl/): Lightweight GUI
- [DBeaver](https://dbeaver.io/): Full-featured GUI
- [sqlite-utils](https://sqlite-utils.datasette.io/): CLI tool
- [Datasette](https://datasette.io/): Web interface
`;
var F = `## AI Editor: GitHub Copilot

AI Code Editors like [GitHub Copilot](https://github.com/features/copilot), [Cursor](https://www.cursor.com/), [Windsurf](http://windsurf.com/), [Roo Code](https://roocode.com/), [Cline](https://cline.bot/), [Continue.dev](https://www.continue.dev/), etc. use LLMs to help you write code faster.

Most are built on top of [VS Code](vscode.md). These are now a standard tool in every developer's toolkit.

[GitHub Copilot](https://github.com/features/copilot) is [free](https://github.com/features/copilot/plans) (as of May 2025) for 2,000 completions and 50 chats.

[![Getting started with GitHub Copilot | Tutorial (11 min)](https://i.ytimg.com/vi_webp/n0NlxUyA7FI/sddefault.webp)](https://youtu.be/n0NlxUyA7FI)

You should learn about:

- [Code Suggestions](https://docs.github.com/en/enterprise-cloud@latest/copilot/using-github-copilot/using-github-copilot-code-suggestions-in-your-editor), which is a basic feature.
- [Using Chat](https://docs.github.com/en/copilot/github-copilot-chat/using-github-copilot-chat-in-your-ide), which lets you code in natural language.
- [Changing the chat model](https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat). The free version includes Claude 3.5 Sonnet, a good coding model.
- [Prompts](https://docs.github.com/en/copilot/copilot-chat-cookbook) to understand how people use AI code editors.
`;
var H = `## LLM CLI: llm

[\`llm\`](https://pypi.org/project/llm) is a command-line utility for interacting with large language models\u2014simplifying prompts, managing models and plugins, logging every conversation, and extracting structured data for pipelines.

[![Language models on the command-line w/ Simon Willison](https://i.ytimg.com/vi_webp/QUXQNi6jQ30/sddefault.webp)](https://youtu.be/QUXQNi6jQ30?t=100)

### Basic Usage

[Install llm](https://github.com/simonw/llm#installation). Then set up your [\`OPENAI_API_KEY\`](https://platform.openai.com/api-keys) environment variable. See [Getting started](https://github.com/simonw/llm?tab=readme-ov-file#getting-started).

**TDS Students**: See [Large Language Models](large-language-models.md) for instructions on how to get and use \`OPENAI_API_KEY\`.

\`\`\`bash
# Run a simple prompt
llm 'five great names for a pet pelican'

# Continue a conversation
llm -c 'now do walruses'

# Start a memory-aware chat session
llm chat

# Specify a model
llm -m gpt-4.1-nano 'Summarize tomorrow\u2019s meeting agenda'

# Extract JSON output
llm 'List the top 5 Python viz libraries with descriptions' \\
  --schema-multi 'name,description'
\`\`\`

Or use llm without installation using [\`uvx\`](uv.md):

\`\`\`bash
# Run llm via uvx without any prior installation
uvx llm 'Translate "Hello, world" into Japanese'

# Specify a model
uvx llm -m gpt-4.1-nano 'Draft a 200-word blog post on data ethics'

# Use structured JSON output
uvx llm 'List the top 5 programming languages in 2025 with their release years' \\
  --schema-multi 'rank,language,release_year'
\`\`\`

### Key Features

- **Interactive prompts**: \`llm '\u2026'\` \u2014 Fast shell access to any LLM.
- **Conversational flow**: \`-c '\u2026'\` \u2014 Continue context across prompts.
- **Model switching**: \`-m MODEL\` \u2014 Use OpenAI, Anthropic, local models, and more.
- **Structured output**: \`llm json\` \u2014 Produce JSON for automation.
- **Logging & history**: \`llm logs path\` \u2014 Persist every prompt/response in SQLite.
- **Web UI**: \`datasette "$(llm logs path)"\` \u2014 Browse your entire history with Datasette.
- **Persistent chat**: \`llm chat\` \u2014 Keep the model in memory across multiple interactions.
- **Plugin ecosystem**: \`llm install PLUGIN\` \u2014 Add support for new models, data sources, or workflows. ([Language models on the command-line - Simon Willison's Weblog](https://simonwillison.net/2024/Jun/17/cli-language-models/?utm_source=chatgpt.com))

### Practical Uses

- **Automated coding**. Generate code scaffolding, review helpers, or utilities on demand. For example, after running\`llm install llm-cmd\`, run \`llm cmd 'Undo the last git commit'\`. Inspired by [Simon\u2019s post on using LLMs for rapid tool building](https://simonwillison.net/2025/Mar/11/using-llms-for-code/).
- **Transcript processing**. Summarize YouTube or podcast transcripts using Gemini. See [Putting Gemini 2.5 Pro through its paces](https://www.macstories.net/mac/llm-youtube-transcripts-with-claude-and-gemini-in-shortcuts/).
- **Commit messages**. Turn diffs into descriptive commit messages, e.g. \`git diff | llm 'Write a concise git commit message explaining these changes'\`. \\
- **Data extraction**. Convert free-text into structured JSON for automation. [Structured data extraction from unstructured content using LLM schemas](https://simonwillison.net/2025/Feb/28/llm-schemas/).
`;
async function ps(t, a) {
  let e = [
    {
      ...(await Promise.resolve()
        .then(() => (Y(), z))
        .then((o) => o.default({ user: t, weight: 0.25 }))),
      help: v(R),
    },
    {
      ...(await Promise.resolve()
        .then(() => (K(), Q))
        .then((o) => o.default({ user: t, weight: 0.25 }))),
      help: v(F),
    },
    {
      ...(await Promise.resolve()
        .then(() => (Z(), X))
        .then((o) => o.default({ user: t, weight: 0.75 }))),
      help: v(j),
    },
    {
      ...(await Promise.resolve()
        .then(() => (te(), ee))
        .then((o) => o.default({ user: t, weight: 0.5 }))),
      help: v(q),
    },
    {
      ...(await Promise.resolve()
        .then(() => (ae(), oe))
        .then((o) => o.default({ user: t, weight: 0.25 }))),
      help: v(D),
    },
    {
      ...(await Promise.resolve()
        .then(() => (ie(), ne))
        .then((o) => o.default({ user: t, weight: 0.25 }))),
      help: null,
    },
    {
      ...(await Promise.resolve()
        .then(() => (le(), re))
        .then((o) => o.default({ user: t, weight: 0.5 }))),
      help: v(_),
    },
    {
      ...(await Promise.resolve()
        .then(() => (de(), ce))
        .then((o) => o.default({ user: t, weight: 0.5 }))),
      help: null,
    },
    {
      ...(await Promise.resolve()
        .then(() => (me(), ue))
        .then((o) => o.default({ user: t, weight: 0.25 }))),
      help: v(J),
    },
    {
      ...(await Promise.resolve()
        .then(() => (he(), pe))
        .then((o) => o.default({ user: t, weight: 0.5 }))),
      help: null,
    },
    {
      ...(await Promise.resolve()
        .then(() => (be(), ge))
        .then((o) => o.default({ user: t, weight: 0.75 }))),
      help: null,
    },
    {
      ...(await Promise.resolve()
        .then(() => (we(), ye))
        .then((o) => o.default({ user: t, weight: 0.5 }))),
      help: null,
    },
    {
      ...(await Promise.resolve()
        .then(() => (xe(), Se))
        .then((o) => o.default({ user: t, weight: 0.5 }))),
      help: v(U),
    },
    {
      ...(await Promise.resolve()
        .then(() => (ke(), $e))
        .then((o) => o.default({ user: t, weight: 0.75 }))),
      help: v(B),
    },
    {
      ...(await Promise.resolve()
        .then(() => (Te(), Ae))
        .then((o) => o.default({ user: t, weight: 0.5 }))),
      help: v(W),
    },
    {
      ...(await Promise.resolve()
        .then(() => (Oe(), Ee))
        .then((o) => o.default({ user: t, weight: 0.75 }))),
      help: v(G),
    },
    {
      ...(await Promise.resolve()
        .then(() => (Ie(), Ne))
        .then((o) => o.default({ user: t, weight: 0.5 }))),
      help: v(H),
    },
    {
      ...(await Promise.resolve()
        .then(() => (Re(), Me))
        .then((o) => o.default({ user: t, weight: 0.5 }))),
      help: null,
    },
    {
      ...(await Promise.resolve()
        .then(() => (qe(), je))
        .then((o) => o.default({ user: t, weight: 0.5 }))),
      help: null,
    },
    {
      ...(await Promise.resolve()
        .then(() => (Je(), _e))
        .then((o) => o.default({ user: t, weight: 0.75 }))),
      help: v(V),
    },
  ];
  return M(e, a), Object.fromEntries(e.map(({ id: o, ...n }) => [o, n]));
}
export { ps as questions };
