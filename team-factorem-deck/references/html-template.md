# HTML Template

Complete single-file HTML structure for Factorem-branded presentations. Light theme, 16:9 aspect ratio, keyboard/touch navigation, Chart.js support.

## Base Template

Copy this entire block as the starting point. Replace `{{placeholders}}` with actual content.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} | Factorem</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
    <style>
        :root {
            --bg: #F8FAFC;
            --bg-surface: #FFFFFF;
            --bg-accent: #EFF6FF;
            --primary: #1272E3;
            --primary-dark: #0C5DBC;
            --primary-light: #DBEAFE;
            --text: #1E293B;
            --text-secondary: #64748B;
            --text-muted: #94A3B8;
            --border: #E2E8F0;
            --accent: #06B6D4;
            --slide-pad: 64px;
            --logo-h: 40px;
            --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            background: #E2E8F0;
            font-family: var(--font);
            color: var(--text);
            overflow: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        /* ===== 16:9 SLIDE CONTAINER ===== */
        .slide-deck {
            position: absolute;
            inset: 0;
            margin: auto;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }
        @media (min-width: 769px) {
            .slide-deck {
                max-width: calc(100vh * 16 / 9);
                max-height: calc(100vw * 9 / 16);
            }
        }

        /* ===== SLIDE BASE ===== */
        .slide {
            position: absolute;
            width: 100%; height: 100%;
            background: var(--bg);
            display: flex;
            flex-direction: column;
            padding: var(--slide-pad);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.4s ease;
            overflow: hidden;
        }
        .slide.active { opacity: 1; visibility: visible; }

        /* Subtle border shows the slide boundary */
        .slide::after {
            content: '';
            position: absolute;
            inset: 0;
            border: 1px solid var(--border);
            pointer-events: none;
            z-index: 10;
        }

        /* ===== LOGO (every slide) ===== */
        .slide-logo {
            position: absolute;
            top: 28px;
            left: var(--slide-pad);
            height: var(--logo-h);
            z-index: 5;
        }

        /* ===== CONTENT SAFE AREA ===== */
        .slide-body {
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            margin-top: 28px;
            overflow: hidden;
        }

        /* ===== TYPOGRAPHY ===== */
        h1 {
            font-size: clamp(36px, 4.5vw, 56px);
            font-weight: 700;
            line-height: 1.12;
            letter-spacing: -0.02em;
            color: var(--text);
        }
        h2 {
            font-size: clamp(24px, 3vw, 36px);
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: -0.01em;
            color: var(--text);
        }
        h3 {
            font-size: clamp(18px, 2vw, 24px);
            font-weight: 600;
            line-height: 1.3;
            color: var(--text);
        }
        p, li {
            font-size: clamp(15px, 1.6vw, 19px);
            color: var(--text-secondary);
            line-height: 1.6;
        }
        .subtitle {
            font-size: clamp(18px, 2vw, 24px);
            color: var(--text-secondary);
            font-weight: 400;
        }
        .label {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--primary);
        }
        .text-primary { color: var(--primary); }
        .text-accent  { color: var(--accent); }
        .text-muted   { color: var(--text-muted); }

        /* ===== LAYOUT HELPERS ===== */
        .split       { display: grid; grid-template-columns: 1fr 1fr;   gap: 48px; align-items: center; height: 100%; }
        .split-60-40 { display: grid; grid-template-columns: 3fr 2fr;   gap: 48px; align-items: center; height: 100%; }
        .split-40-60 { display: grid; grid-template-columns: 2fr 3fr;   gap: 48px; align-items: center; height: 100%; }
        .grid-2      { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
        .grid-3      { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .grid-4      { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .stack        { display: flex; flex-direction: column; gap: 20px; }
        .center       { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
        .align-start  { align-items: flex-start; text-align: left; }

        /* ===== CARDS ===== */
        .card {
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 28px;
        }
        .card-accent {
            background: var(--bg-accent);
            border: 1px solid var(--primary-light);
            border-radius: 12px;
            padding: 28px;
        }

        /* ===== METRICS ===== */
        .metric { text-align: center; }
        .metric-value {
            font-size: clamp(36px, 5vw, 60px);
            font-weight: 800;
            color: var(--primary);
            line-height: 1;
        }
        .metric-label {
            font-size: 13px;
            color: var(--text-secondary);
            margin-top: 8px;
            font-weight: 500;
        }

        /* ===== ILLUSTRATIONS ===== */
        .slide-illustration {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 12px;
        }
        .illust-frame {
            background: var(--bg-accent);
            border-radius: 16px;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            min-height: 200px;
        }

        /* ===== BULLET POINTS ===== */
        .points {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 14px;
        }
        .points li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            font-size: clamp(15px, 1.6vw, 18px);
        }
        .points li::before {
            content: '';
            width: 8px; height: 8px;
            background: var(--primary);
            border-radius: 50%;
            margin-top: 8px;
            flex-shrink: 0;
        }

        /* ===== DIVIDER ===== */
        .divider {
            width: 48px; height: 3px;
            background: var(--primary);
            border-radius: 2px;
        }

        /* ===== COVER SLIDE ===== */
        .slide-cover {
            background: linear-gradient(145deg, var(--bg) 0%, var(--bg-accent) 60%, #DBEAFE 100%);
            align-items: center;
            text-align: center;
        }
        .slide-cover .slide-logo {
            left: 50%;
            transform: translateX(-50%);
            height: 48px;
            top: 40px;
        }
        .slide-cover .slide-body {
            align-items: center;
        }
        .confidential {
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--text-muted);
            border: 1px solid var(--border);
            padding: 4px 14px;
            border-radius: 4px;
        }

        /* ===== SECTION DIVIDER SLIDE (blue) ===== */
        .slide-section {
            background: var(--primary);
            align-items: center;
            text-align: center;
        }
        .slide-section h1,
        .slide-section h2,
        .slide-section p,
        .slide-section .subtitle { color: #FFFFFF; }
        .slide-section .label { color: rgba(255,255,255,0.7); }
        .slide-section .slide-logo { filter: brightness(0) invert(1); }
        .slide-section::after { border-color: rgba(255,255,255,0.15); }
        .slide-section .divider { background: rgba(255,255,255,0.4); }
        .slide-section .page-num { color: rgba(255,255,255,0.5); }

        /* ===== PAGE NUMBER ===== */
        .page-num {
            position: absolute;
            bottom: 24px;
            right: var(--slide-pad);
            font-size: 11px;
            color: var(--text-muted);
            font-weight: 500;
            z-index: 5;
        }

        /* ===== PROGRESS BAR ===== */
        .progress {
            position: fixed;
            top: 0; left: 0;
            height: 3px;
            background: var(--primary);
            transition: width 0.3s;
            z-index: 1000;
        }

        /* ===== NAVIGATION ===== */
        .nav {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 14px;
            z-index: 1000;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 24px;
            padding: 6px 14px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .nav-btn {
            background: none;
            border: none;
            color: var(--text-secondary);
            width: 30px; height: 30px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }
        .nav-btn:hover { background: var(--bg-accent); color: var(--primary); }
        .nav-count {
            font-size: 12px;
            color: var(--text-muted);
            font-variant-numeric: tabular-nums;
            min-width: 40px;
            text-align: center;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
            .slide { padding: 32px 24px; }
            .split, .split-60-40, .split-40-60 { grid-template-columns: 1fr; gap: 24px; }
            .grid-3, .grid-4 { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
            .slide { padding: 24px 16px; }
            .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
        }

        /* ===== PRINT / PDF EXPORT ===== */
        @media print {
            body { background: white; }
            .nav, .progress { display: none !important; }
            .slide-deck { position: static; max-width: none; max-height: none; }
            .slide {
                position: relative !important;
                opacity: 1 !important;
                visibility: visible !important;
                page-break-after: always;
                width: 100vw;
                height: 100vh;
            }
        }

        /* ===== ANIMATIONS ===== */
        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        .slide.active .anim   { animation: fadeUp 0.45s ease-out forwards; }
        .slide.active .anim-1 { animation: fadeUp 0.45s ease-out 0.08s forwards; opacity: 0; }
        .slide.active .anim-2 { animation: fadeUp 0.45s ease-out 0.16s forwards; opacity: 0; }
        .slide.active .anim-3 { animation: fadeUp 0.45s ease-out 0.24s forwards; opacity: 0; }
    </style>
</head>
<body>
    <div class="progress" id="prog"></div>

    <div class="slide-deck">

        <!-- ==================== COVER ==================== -->
        <div class="slide slide-cover active">
            <img src="images/logo.png" class="slide-logo" alt="Factorem">
            <div class="slide-body center">
                <div class="divider anim" style="width:56px; margin-bottom:20px;"></div>
                <h1 class="anim-1">{{DECK TITLE}}</h1>
                <p class="subtitle anim-2">{{SUBTITLE OR TAGLINE}}</p>
                <div class="anim-3" style="margin-top:28px; display:flex; flex-direction:column; align-items:center; gap:12px;">
                    <span class="confidential">Confidential</span>
                    <span class="text-muted" style="font-size:13px;">{{Month YYYY}}</span>
                </div>
            </div>
        </div>

        <!-- ==================== SPLIT + ILLUSTRATION (60/40) ==================== -->
        <div class="slide">
            <img src="images/logo.png" class="slide-logo" alt="Factorem">
            <div class="slide-body">
                <div class="split-60-40">
                    <div class="stack">
                        <span class="label anim">{{SECTION}}</span>
                        <h2 class="anim-1">{{TITLE}}</h2>
                        <ul class="points anim-2">
                            <li>{{Point 1}}</li>
                            <li>{{Point 2}}</li>
                            <li>{{Point 3}}</li>
                        </ul>
                    </div>
                    <div class="illust-frame anim-3">
                        <img src="images/{{name}}.png" class="slide-illustration" alt="{{desc}}">
                    </div>
                </div>
            </div>
            <span class="page-num">{{N}}</span>
        </div>

        <!-- ==================== SPLIT + ILLUSTRATION (40/60) ==================== -->
        <div class="slide">
            <img src="images/logo.png" class="slide-logo" alt="Factorem">
            <div class="slide-body">
                <div class="split-40-60">
                    <div class="illust-frame anim">
                        <img src="images/{{name}}.png" class="slide-illustration" alt="{{desc}}">
                    </div>
                    <div class="stack">
                        <span class="label anim-1">{{SECTION}}</span>
                        <h2 class="anim-2">{{TITLE}}</h2>
                        <ul class="points anim-3">
                            <li>{{Point 1}}</li>
                            <li>{{Point 2}}</li>
                            <li>{{Point 3}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <span class="page-num">{{N}}</span>
        </div>

        <!-- ==================== METRICS GRID ==================== -->
        <div class="slide">
            <img src="images/logo.png" class="slide-logo" alt="Factorem">
            <div class="slide-body center">
                <span class="label anim">{{SECTION}}</span>
                <h2 class="anim-1">{{TITLE}}</h2>
                <div class="grid-4 anim-2" style="margin-top:20px; width:100%;">
                    <div class="card metric">
                        <div class="metric-value">{{VAL}}</div>
                        <div class="metric-label">{{Label}}</div>
                    </div>
                    <div class="card metric">
                        <div class="metric-value">{{VAL}}</div>
                        <div class="metric-label">{{Label}}</div>
                    </div>
                    <div class="card metric">
                        <div class="metric-value">{{VAL}}</div>
                        <div class="metric-label">{{Label}}</div>
                    </div>
                    <div class="card metric">
                        <div class="metric-value">{{VAL}}</div>
                        <div class="metric-label">{{Label}}</div>
                    </div>
                </div>
            </div>
            <span class="page-num">{{N}}</span>
        </div>

        <!-- ==================== 3-CARD GRID ==================== -->
        <div class="slide">
            <img src="images/logo.png" class="slide-logo" alt="Factorem">
            <div class="slide-body">
                <div class="stack" style="height:100%;">
                    <div>
                        <span class="label anim">{{SECTION}}</span>
                        <h2 class="anim-1" style="margin-top:8px;">{{TITLE}}</h2>
                    </div>
                    <div class="grid-3 anim-2" style="flex:1; align-items:stretch;">
                        <div class="card stack">
                            <h3>{{Card Title}}</h3>
                            <p>{{Card body, 1-2 sentences max}}</p>
                        </div>
                        <div class="card stack">
                            <h3>{{Card Title}}</h3>
                            <p>{{Card body}}</p>
                        </div>
                        <div class="card stack">
                            <h3>{{Card Title}}</h3>
                            <p>{{Card body}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <span class="page-num">{{N}}</span>
        </div>

        <!-- ==================== SECTION DIVIDER (blue bg) ==================== -->
        <div class="slide slide-section">
            <img src="images/logo-white.png" class="slide-logo" alt="Factorem">
            <div class="slide-body center">
                <div class="divider anim" style="width:48px; margin-bottom:16px;"></div>
                <h1 class="anim-1">{{SECTION NAME}}</h1>
                <p class="subtitle anim-2">{{Brief supporting line}}</p>
            </div>
            <span class="page-num">{{N}}</span>
        </div>

        <!-- ==================== FULL-WIDTH STATEMENT ==================== -->
        <div class="slide">
            <img src="images/logo.png" class="slide-logo" alt="Factorem">
            <div class="slide-body center">
                <span class="label anim">{{SECTION}}</span>
                <h1 class="anim-1" style="max-width:780px;">{{A bold statement that stands alone}}</h1>
                <div class="divider anim-2" style="margin-top:20px;"></div>
                <p class="subtitle anim-3" style="max-width:560px;">{{One line of supporting context}}</p>
            </div>
            <span class="page-num">{{N}}</span>
        </div>

        <!-- ==================== CHART SLIDE ==================== -->
        <div class="slide">
            <img src="images/logo.png" class="slide-logo" alt="Factorem">
            <div class="slide-body">
                <div class="split-60-40">
                    <div class="stack">
                        <span class="label anim">{{SECTION}}</span>
                        <h2 class="anim-1">{{TITLE}}</h2>
                        <div class="anim-2" style="height:280px; margin-top:8px;">
                            <canvas id="{{chartId}}"></canvas>
                        </div>
                    </div>
                    <div class="stack anim-3" style="gap:16px;">
                        <div class="card-accent metric">
                            <div class="metric-value" style="font-size:44px;">{{KEY METRIC}}</div>
                            <div class="metric-label">{{Metric description}}</div>
                        </div>
                        <p style="font-size:15px;">{{Brief context or footnote}}</p>
                    </div>
                </div>
            </div>
            <span class="page-num">{{N}}</span>
        </div>

        <!-- ==================== TEAM GRID (2 cols) ==================== -->
        <div class="slide">
            <img src="images/logo.png" class="slide-logo" alt="Factorem">
            <div class="slide-body">
                <div class="stack" style="height:100%;">
                    <div>
                        <span class="label anim">{{SECTION}}</span>
                        <h2 class="anim-1" style="margin-top:8px;">{{TITLE}}</h2>
                    </div>
                    <div class="grid-2 anim-2" style="flex:1;">
                        <div class="card" style="display:flex; gap:16px; align-items:center;">
                            <img src="images/{{person}}.png" style="width:72px; height:72px; border-radius:50%; object-fit:cover; flex-shrink:0;" alt="">
                            <div>
                                <h3 style="font-size:18px;">{{Name}}</h3>
                                <p style="font-size:14px; color:var(--primary); margin-top:2px;">{{Title}}</p>
                                <p style="font-size:14px; margin-top:6px;">{{One-line bio}}</p>
                            </div>
                        </div>
                        <!-- Repeat -->
                    </div>
                </div>
            </div>
            <span class="page-num">{{N}}</span>
        </div>

        <!-- ==================== COMPARISON / TABLE ==================== -->
        <div class="slide">
            <img src="images/logo.png" class="slide-logo" alt="Factorem">
            <div class="slide-body">
                <div class="stack" style="height:100%;">
                    <div>
                        <span class="label anim">{{SECTION}}</span>
                        <h2 class="anim-1" style="margin-top:8px;">{{TITLE}}</h2>
                    </div>
                    <div class="anim-2" style="flex:1; overflow:auto;">
                        <table style="width:100%; border-collapse:collapse; font-size:15px;">
                            <thead>
                                <tr style="border-bottom:2px solid var(--primary);">
                                    <th style="text-align:left; padding:12px 16px; color:var(--text); font-weight:600;">Feature</th>
                                    <th style="text-align:center; padding:12px 16px; color:var(--primary); font-weight:600;">Factorem</th>
                                    <th style="text-align:center; padding:12px 16px; color:var(--text-muted); font-weight:500;">Competitor A</th>
                                    <th style="text-align:center; padding:12px 16px; color:var(--text-muted); font-weight:500;">Competitor B</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="border-bottom:1px solid var(--border);">
                                    <td style="padding:12px 16px;">{{Feature}}</td>
                                    <td style="text-align:center; padding:12px 16px; color:var(--primary);">&#10003;</td>
                                    <td style="text-align:center; padding:12px 16px; color:var(--text-muted);">&#10003;</td>
                                    <td style="text-align:center; padding:12px 16px; color:var(--text-muted);">&#10007;</td>
                                </tr>
                                <!-- Repeat rows -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <span class="page-num">{{N}}</span>
        </div>

    </div><!-- /.slide-deck -->

    <!-- Navigation -->
    <div class="nav">
        <button class="nav-btn" onclick="prev()" aria-label="Previous">&#8592;</button>
        <span class="nav-count"><span id="cur">1</span> / <span id="tot">1</span></span>
        <button class="nav-btn" onclick="next()" aria-label="Next">&#8594;</button>
    </div>

    <script>
        let cur = 1;
        const slides = document.querySelectorAll('.slide');
        const tot = slides.length;
        document.getElementById('tot').textContent = tot;

        function go(n) {
            n = Math.max(1, Math.min(n, tot));
            cur = n;
            slides.forEach((s, i) => s.classList.toggle('active', i === n - 1));
            document.getElementById('cur').textContent = n;
            document.getElementById('prog').style.width = (n / tot * 100) + '%';
        }
        function next() { go(cur + 1); }
        function prev() { go(cur - 1); }

        document.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next(); }
            if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
            if (e.key === 'Home') { e.preventDefault(); go(1); }
            if (e.key === 'End') { e.preventDefault(); go(tot); }
        });

        document.querySelector('.slide-deck').addEventListener('click', e => {
            if (!e.target.closest('.nav')) next();
        });

        let tx = 0;
        document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; });
        document.addEventListener('touchend', e => {
            const d = tx - e.changedTouches[0].clientX;
            if (Math.abs(d) > 50) d > 0 ? next() : prev();
        });

        go(1);
    </script>
</body>
</html>
```

## Chart.js Configuration (Light Theme)

Use this pattern for financial/data slides. Colors match the Factorem palette.

### Bar Chart (Yearly Values)

All chart data below is dummy placeholder data. Replace with your own verified figures.

```javascript
new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4 (est.)'],
        datasets: [{
            data: [100, 200, 400, 800],
            backgroundColor: ['#DBEAFE', '#DBEAFE', '#1272E3', 'rgba(18,114,227,0.4)'],
            borderColor: '#1272E3',
            borderWidth: 1,
            borderRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1E293B',
                padding: 12,
                cornerRadius: 8,
                titleFont: { family: 'Inter', size: 13 },
                bodyFont: { family: 'Inter', size: 13 },
                callbacks: {
                    label: ctx => '$' + ctx.parsed.y.toLocaleString() + 'K'
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#64748B', font: { family: 'Inter', size: 12 } },
                border: { display: false }
            },
            y: {
                grid: { color: '#E2E8F0', drawBorder: false },
                ticks: {
                    color: '#64748B',
                    font: { family: 'Inter', size: 12 },
                    callback: v => '$' + v + 'K'
                },
                border: { display: false }
            }
        }
    }
});
```

### Line Chart (Trend)
```javascript
new Chart(document.getElementById('trendChart'), {
    type: 'line',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            data: [100, 180, 320, 550],
            borderColor: '#1272E3',
            backgroundColor: 'rgba(18,114,227,0.08)',
            borderWidth: 2.5,
            fill: true,
            tension: 0.35,
            pointBackgroundColor: '#1272E3',
            pointRadius: 4,
            pointHoverRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#64748B', font: { family: 'Inter', size: 12 } },
                border: { display: false }
            },
            y: {
                grid: { color: '#E2E8F0', drawBorder: false },
                ticks: { color: '#64748B', font: { family: 'Inter', size: 12 } },
                border: { display: false }
            }
        }
    }
});
```

### Doughnut Chart (Split)
```javascript
new Chart(document.getElementById('splitChart'), {
    type: 'doughnut',
    data: {
        labels: ['Segment A', 'Segment B', 'Segment C', 'Other'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: ['#1272E3', '#06B6D4', '#DBEAFE', '#E2E8F0'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#64748B',
                    font: { family: 'Inter', size: 12 },
                    padding: 16,
                    usePointStyle: true,
                    pointStyleWidth: 10
                }
            }
        }
    }
});
```

## Alignment Checklist

Before finalizing, verify each slide against these rules:

| Check | Rule |
|-------|------|
| Logo | Top-left, 28px from top, `slide-pad` from left, 40px height (48px on cover). Centered on cover only. |
| Page number | Bottom-right, 24px from bottom, `slide-pad` from right. Hidden on cover. |
| Content | All content inside `.slide-body`. Never place elements outside this wrapper. |
| Cards | Same height within a row. Use `align-items: stretch` on the grid. |
| Illustrations | Always inside `.illust-frame`. Never free-floating. |
| Text | Left-aligned by default. Center only for cover, section dividers, and full-width statements. |
| Spacing | Use the `gap` property on flex/grid containers. Never use margin hacks between siblings. |
| Overflow | Every `.slide` has `overflow: hidden`. If content clips, the slide has too much. Split it. |
