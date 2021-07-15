(function() {var implementors = {};
implementors["palette"] = [{"text":"impl&lt;C, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C, T&gt;&gt; for <a class=\"struct\" href=\"palette/blend/struct.PreAlpha.html\" title=\"struct palette::blend::PreAlpha\">PreAlpha</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: UlpsEq&lt;Epsilon = T::Epsilon&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::blend::pre_alpha::PreAlpha"]},{"text":"impl&lt;T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/gradient/struct.Range.html\" title=\"struct palette::gradient::Range\">Range</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"palette/gradient/struct.Range.html\" title=\"struct palette::gradient::Range\">Range</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UlpsEq + <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>","synthetic":false,"types":["palette::gradient::Range"]},{"text":"impl&lt;C, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Alpha.html\" title=\"struct palette::Alpha\">Alpha</a>&lt;C, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: UlpsEq&lt;Epsilon = T::Epsilon&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::alpha::alpha::Alpha"]},{"text":"impl&lt;S, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Hsl.html\" title=\"struct palette::Hsl\">Hsl</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Hsl.html\" title=\"struct palette::Hsl\">Hsl</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;: UlpsEq + AbsDiffEq&lt;Epsilon = T::Epsilon&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::hsl::Hsl"]},{"text":"impl&lt;S, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Hsv.html\" title=\"struct palette::Hsv\">Hsv</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;: UlpsEq + AbsDiffEq&lt;Epsilon = T::Epsilon&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::hsv::Hsv"]},{"text":"impl&lt;S, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Hwb.html\" title=\"struct palette::Hwb\">Hwb</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.Component.html\" title=\"trait palette::Component\">Component</a> + UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;: UlpsEq + AbsDiffEq&lt;Epsilon = T::Epsilon&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::hwb::Hwb"]},{"text":"impl&lt;S, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"palette/luma/struct.Luma.html\" title=\"struct palette::luma::Luma\">Luma</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UlpsEq,&nbsp;</span>","synthetic":false,"types":["palette::luma::luma::Luma"]},{"text":"impl&lt;T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Oklab.html\" title=\"struct palette::Oklab\">Oklab</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::oklab::Oklab"]},{"text":"impl&lt;T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Oklch.html\" title=\"struct palette::Oklch\">Oklch</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Oklch.html\" title=\"struct palette::Oklch\">Oklch</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a> + UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a>,&nbsp;</span>","synthetic":false,"types":["palette::oklch::Oklch"]},{"text":"impl&lt;S, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt;&gt; for <a class=\"struct\" href=\"palette/rgb/struct.Rgb.html\" title=\"struct palette::rgb::Rgb\">Rgb</a>&lt;S, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["palette::rgb::rgb::Rgb"]},{"text":"impl&lt;Wp, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Xyz.html\" title=\"struct palette::Xyz\">Xyz</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a> + UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a>,&nbsp;</span>","synthetic":false,"types":["palette::xyz::Xyz"]},{"text":"impl&lt;Wp, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Yxy.html\" title=\"struct palette::Yxy\">Yxy</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a> + UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a>,&nbsp;</span>","synthetic":false,"types":["palette::yxy::Yxy"]},{"text":"impl&lt;Wp, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Lab.html\" title=\"struct palette::Lab\">Lab</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a> + UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a>,&nbsp;</span>","synthetic":false,"types":["palette::lab::Lab"]},{"text":"impl&lt;Wp, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Luv.html\" title=\"struct palette::Luv\">Luv</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a> + UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a>,&nbsp;</span>","synthetic":false,"types":["palette::luv::Luv"]},{"text":"impl&lt;Wp, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Lch.html\" title=\"struct palette::Lch\">Lch</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Lch.html\" title=\"struct palette::Lch\">Lch</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a> + UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a>,&nbsp;</span>","synthetic":false,"types":["palette::lch::Lch"]},{"text":"impl&lt;Wp, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Lchuv.html\" title=\"struct palette::Lchuv\">Lchuv</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Lchuv.html\" title=\"struct palette::Lchuv\">Lchuv</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a> + UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a>,&nbsp;</span>","synthetic":false,"types":["palette::lchuv::Lchuv"]},{"text":"impl&lt;Wp, T&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.Hsluv.html\" title=\"struct palette::Hsluv\">Hsluv</a>&lt;Wp, T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.Hsluv.html\" title=\"struct palette::Hsluv\">Hsluv</a>&lt;Wp, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a> + UlpsEq,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"palette/trait.FloatComponent.html\" title=\"trait palette::FloatComponent\">FloatComponent</a>,&nbsp;</span>","synthetic":false,"types":["palette::hsluv::Hsluv"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a> + <a class=\"trait\" href=\"palette/trait.FromF64.html\" title=\"trait palette::FromF64\">FromF64</a> + UlpsEq&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.LabHue.html\" title=\"struct palette::LabHue\">LabHue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.LabHue.html\" title=\"struct palette::LabHue\">LabHue</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a> + <a class=\"trait\" href=\"palette/trait.FromF64.html\" title=\"trait palette::FromF64\">FromF64</a>,&nbsp;</span>","synthetic":false,"types":["palette::hues::LabHue"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a> + <a class=\"trait\" href=\"palette/trait.FromF64.html\" title=\"trait palette::FromF64\">FromF64</a> + UlpsEq&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.RgbHue.html\" title=\"struct palette::RgbHue\">RgbHue</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a> + <a class=\"trait\" href=\"palette/trait.FromF64.html\" title=\"trait palette::FromF64\">FromF64</a>,&nbsp;</span>","synthetic":false,"types":["palette::hues::RgbHue"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a> + <a class=\"trait\" href=\"palette/trait.FromF64.html\" title=\"trait palette::FromF64\">FromF64</a> + UlpsEq&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.LuvHue.html\" title=\"struct palette::LuvHue\">LuvHue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.LuvHue.html\" title=\"struct palette::LuvHue\">LuvHue</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a> + <a class=\"trait\" href=\"palette/trait.FromF64.html\" title=\"trait palette::FromF64\">FromF64</a>,&nbsp;</span>","synthetic":false,"types":["palette::hues::LuvHue"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a> + <a class=\"trait\" href=\"palette/trait.FromF64.html\" title=\"trait palette::FromF64\">FromF64</a> + UlpsEq&gt; UlpsEq&lt;<a class=\"struct\" href=\"palette/struct.OklabHue.html\" title=\"struct palette::OklabHue\">OklabHue</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"palette/struct.OklabHue.html\" title=\"struct palette::OklabHue\">OklabHue</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Epsilon: <a class=\"trait\" href=\"palette/float/trait.Float.html\" title=\"trait palette::float::Float\">Float</a> + <a class=\"trait\" href=\"palette/trait.FromF64.html\" title=\"trait palette::FromF64\">FromF64</a>,&nbsp;</span>","synthetic":false,"types":["palette::hues::OklabHue"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()