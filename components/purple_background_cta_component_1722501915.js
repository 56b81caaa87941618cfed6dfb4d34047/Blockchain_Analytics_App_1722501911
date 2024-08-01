/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1722501915", {
    template: `
    <section id="cta-section-container" class="bg-gradient-to-br from-pink-400 via-purple-500 to-magenta-600 min-h-screen flex items-center justify-center">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden backdrop-blur-xl bg-white bg-opacity-10 shadow-lg border border-white border-opacity-20">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="bg-pink-500 absolute inset-0 translate-z-0 rounded-full blur-3xl opacity-50"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/3 h-1/3 translate-z-0 rounded-full blur-2xl bg-magenta-400 opacity-70"></div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-3xl opacity-30 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" stop-color="#FF69B4" /><stop offset="100%" stop-color="#9370DB" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium text-lg text-pink-200 mb-2 animate-pulse">Real-Time Blockchain Data Analysis</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-6">Unlock Blockchain Data Insights</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-xl mb-10 text-purple-100 leading-relaxed">Gain a comprehensive understanding of the latest blockchain activity with our powerful analysis app. Stay ahead of the curve and make informed decisions in this cosmic data landscape.</p></div>
                    <a id="content-cta-button" href="#0" class="inline-block px-8 py-4 rounded-full text-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Get Started <span id="content-cta-arrow" class="ml-2">→</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
    });
                    