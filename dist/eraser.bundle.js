/*! For license information please see eraser.bundle.js.LICENSE.txt */
(() => {
    var __webpack_modules__ = {
            2918: function(t, e) {
                var r;
                (function() {
                    var i = !1,
                        o = function(t) {
                            return t instanceof o ? t : this instanceof o ? void(this.EXIFwrapped = t) : new o(t)
                        };
                    t.exports && (e = t.exports = o), e.EXIF = o;
                    var a = o.Tags = {
                            36864: "ExifVersion",
                            40960: "FlashpixVersion",
                            40961: "ColorSpace",
                            40962: "PixelXDimension",
                            40963: "PixelYDimension",
                            37121: "ComponentsConfiguration",
                            37122: "CompressedBitsPerPixel",
                            37500: "MakerNote",
                            37510: "UserComment",
                            40964: "RelatedSoundFile",
                            36867: "DateTimeOriginal",
                            36868: "DateTimeDigitized",
                            37520: "SubsecTime",
                            37521: "SubsecTimeOriginal",
                            37522: "SubsecTimeDigitized",
                            33434: "ExposureTime",
                            33437: "FNumber",
                            34850: "ExposureProgram",
                            34852: "SpectralSensitivity",
                            34855: "ISOSpeedRatings",
                            34856: "OECF",
                            37377: "ShutterSpeedValue",
                            37378: "ApertureValue",
                            37379: "BrightnessValue",
                            37380: "ExposureBias",
                            37381: "MaxApertureValue",
                            37382: "SubjectDistance",
                            37383: "MeteringMode",
                            37384: "LightSource",
                            37385: "Flash",
                            37396: "SubjectArea",
                            37386: "FocalLength",
                            41483: "FlashEnergy",
                            41484: "SpatialFrequencyResponse",
                            41486: "FocalPlaneXResolution",
                            41487: "FocalPlaneYResolution",
                            41488: "FocalPlaneResolutionUnit",
                            41492: "SubjectLocation",
                            41493: "ExposureIndex",
                            41495: "SensingMethod",
                            41728: "FileSource",
                            41729: "SceneType",
                            41730: "CFAPattern",
                            41985: "CustomRendered",
                            41986: "ExposureMode",
                            41987: "WhiteBalance",
                            41988: "DigitalZoomRation",
                            41989: "FocalLengthIn35mmFilm",
                            41990: "SceneCaptureType",
                            41991: "GainControl",
                            41992: "Contrast",
                            41993: "Saturation",
                            41994: "Sharpness",
                            41995: "DeviceSettingDescription",
                            41996: "SubjectDistanceRange",
                            40965: "InteroperabilityIFDPointer",
                            42016: "ImageUniqueID"
                        },
                        s = o.TiffTags = {
                            256: "ImageWidth",
                            257: "ImageHeight",
                            34665: "ExifIFDPointer",
                            34853: "GPSInfoIFDPointer",
                            40965: "InteroperabilityIFDPointer",
                            258: "BitsPerSample",
                            259: "Compression",
                            262: "PhotometricInterpretation",
                            274: "Orientation",
                            277: "SamplesPerPixel",
                            284: "PlanarConfiguration",
                            530: "YCbCrSubSampling",
                            531: "YCbCrPositioning",
                            282: "XResolution",
                            283: "YResolution",
                            296: "ResolutionUnit",
                            273: "StripOffsets",
                            278: "RowsPerStrip",
                            279: "StripByteCounts",
                            513: "JPEGInterchangeFormat",
                            514: "JPEGInterchangeFormatLength",
                            301: "TransferFunction",
                            318: "WhitePoint",
                            319: "PrimaryChromaticities",
                            529: "YCbCrCoefficients",
                            532: "ReferenceBlackWhite",
                            306: "DateTime",
                            270: "ImageDescription",
                            271: "Make",
                            272: "Model",
                            305: "Software",
                            315: "Artist",
                            33432: "Copyright"
                        },
                        l = o.GPSTags = {
                            0: "GPSVersionID",
                            1: "GPSLatitudeRef",
                            2: "GPSLatitude",
                            3: "GPSLongitudeRef",
                            4: "GPSLongitude",
                            5: "GPSAltitudeRef",
                            6: "GPSAltitude",
                            7: "GPSTimeStamp",
                            8: "GPSSatellites",
                            9: "GPSStatus",
                            10: "GPSMeasureMode",
                            11: "GPSDOP",
                            12: "GPSSpeedRef",
                            13: "GPSSpeed",
                            14: "GPSTrackRef",
                            15: "GPSTrack",
                            16: "GPSImgDirectionRef",
                            17: "GPSImgDirection",
                            18: "GPSMapDatum",
                            19: "GPSDestLatitudeRef",
                            20: "GPSDestLatitude",
                            21: "GPSDestLongitudeRef",
                            22: "GPSDestLongitude",
                            23: "GPSDestBearingRef",
                            24: "GPSDestBearing",
                            25: "GPSDestDistanceRef",
                            26: "GPSDestDistance",
                            27: "GPSProcessingMethod",
                            28: "GPSAreaInformation",
                            29: "GPSDateStamp",
                            30: "GPSDifferential"
                        },
                        c = o.IFD1Tags = {
                            256: "ImageWidth",
                            257: "ImageHeight",
                            258: "BitsPerSample",
                            259: "Compression",
                            262: "PhotometricInterpretation",
                            273: "StripOffsets",
                            274: "Orientation",
                            277: "SamplesPerPixel",
                            278: "RowsPerStrip",
                            279: "StripByteCounts",
                            282: "XResolution",
                            283: "YResolution",
                            284: "PlanarConfiguration",
                            296: "ResolutionUnit",
                            513: "JpegIFOffset",
                            514: "JpegIFByteCount",
                            529: "YCbCrCoefficients",
                            530: "YCbCrSubSampling",
                            531: "YCbCrPositioning",
                            532: "ReferenceBlackWhite"
                        },
                        h = o.StringValues = {
                            ExposureProgram: {
                                0: "Not defined",
                                1: "Manual",
                                2: "Normal program",
                                3: "Aperture priority",
                                4: "Shutter priority",
                                5: "Creative program",
                                6: "Action program",
                                7: "Portrait mode",
                                8: "Landscape mode"
                            },
                            MeteringMode: {
                                0: "Unknown",
                                1: "Average",
                                2: "CenterWeightedAverage",
                                3: "Spot",
                                4: "MultiSpot",
                                5: "Pattern",
                                6: "Partial",
                                255: "Other"
                            },
                            LightSource: {
                                0: "Unknown",
                                1: "Daylight",
                                2: "Fluorescent",
                                3: "Tungsten (incandescent light)",
                                4: "Flash",
                                9: "Fine weather",
                                10: "Cloudy weather",
                                11: "Shade",
                                12: "Daylight fluorescent (D 5700 - 7100K)",
                                13: "Day white fluorescent (N 4600 - 5400K)",
                                14: "Cool white fluorescent (W 3900 - 4500K)",
                                15: "White fluorescent (WW 3200 - 3700K)",
                                17: "Standard light A",
                                18: "Standard light B",
                                19: "Standard light C",
                                20: "D55",
                                21: "D65",
                                22: "D75",
                                23: "D50",
                                24: "ISO studio tungsten",
                                255: "Other"
                            },
                            Flash: {
                                0: "Flash did not fire",
                                1: "Flash fired",
                                5: "Strobe return light not detected",
                                7: "Strobe return light detected",
                                9: "Flash fired, compulsory flash mode",
                                13: "Flash fired, compulsory flash mode, return light not detected",
                                15: "Flash fired, compulsory flash mode, return light detected",
                                16: "Flash did not fire, compulsory flash mode",
                                24: "Flash did not fire, auto mode",
                                25: "Flash fired, auto mode",
                                29: "Flash fired, auto mode, return light not detected",
                                31: "Flash fired, auto mode, return light detected",
                                32: "No flash function",
                                65: "Flash fired, red-eye reduction mode",
                                69: "Flash fired, red-eye reduction mode, return light not detected",
                                71: "Flash fired, red-eye reduction mode, return light detected",
                                73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                                77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                                79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                                89: "Flash fired, auto mode, red-eye reduction mode",
                                93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                                95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                            },
                            SensingMethod: {
                                1: "Not defined",
                                2: "One-chip color area sensor",
                                3: "Two-chip color area sensor",
                                4: "Three-chip color area sensor",
                                5: "Color sequential area sensor",
                                7: "Trilinear sensor",
                                8: "Color sequential linear sensor"
                            },
                            SceneCaptureType: {
                                0: "Standard",
                                1: "Landscape",
                                2: "Portrait",
                                3: "Night scene"
                            },
                            SceneType: {
                                1: "Directly photographed"
                            },
                            CustomRendered: {
                                0: "Normal process",
                                1: "Custom process"
                            },
                            WhiteBalance: {
                                0: "Auto white balance",
                                1: "Manual white balance"
                            },
                            GainControl: {
                                0: "None",
                                1: "Low gain up",
                                2: "High gain up",
                                3: "Low gain down",
                                4: "High gain down"
                            },
                            Contrast: {
                                0: "Normal",
                                1: "Soft",
                                2: "Hard"
                            },
                            Saturation: {
                                0: "Normal",
                                1: "Low saturation",
                                2: "High saturation"
                            },
                            Sharpness: {
                                0: "Normal",
                                1: "Soft",
                                2: "Hard"
                            },
                            SubjectDistanceRange: {
                                0: "Unknown",
                                1: "Macro",
                                2: "Close view",
                                3: "Distant view"
                            },
                            FileSource: {
                                3: "DSC"
                            },
                            Components: {
                                0: "",
                                1: "Y",
                                2: "Cb",
                                3: "Cr",
                                4: "R",
                                5: "G",
                                6: "B"
                            }
                        };

                    function u(t) {
                        return !!t.exifdata
                    }

                    function f(t, e) {
                        function r(r) {
                            var n = d(r);
                            t.exifdata = n || {};
                            var a = function(t) {
                                var e = new DataView(t);
                                if (i && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) return i && console.log("Not a valid JPEG"), !1;
                                for (var r = 2, o = t.byteLength, n = function(t, e) {
                                        return 56 === t.getUint8(e) && 66 === t.getUint8(e + 1) && 73 === t.getUint8(e + 2) && 77 === t.getUint8(e + 3) && 4 === t.getUint8(e + 4) && 4 === t.getUint8(e + 5)
                                    }; r < o;) {
                                    if (n(e, r)) {
                                        var a = e.getUint8(r + 7);
                                        return a % 2 != 0 && (a += 1), 0 === a && (a = 4), g(t, r + 8 + a, e.getUint16(r + 6 + a))
                                    }
                                    r++
                                }
                            }(r);
                            if (t.iptcdata = a || {}, o.isXmpEnabled) {
                                var s = function(t) {
                                    if ("DOMParser" in self) {
                                        var e = new DataView(t);
                                        if (i && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) return i && console.log("Not a valid JPEG"), !1;
                                        for (var r = 2, o = t.byteLength, n = new DOMParser; r < o - 4;) {
                                            if ("http" == v(e, r, 4)) {
                                                var a = r - 1,
                                                    s = e.getUint16(r - 2) - 1,
                                                    l = v(e, a, s),
                                                    c = l.indexOf("xmpmeta>") + 8,
                                                    h = (l = l.substring(l.indexOf("<x:xmpmeta"), c)).indexOf("x:xmpmeta") + 10;
                                                return l = l.slice(0, h) + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' + l.slice(h), S(n.parseFromString(l, "text/xml"))
                                            }
                                            r++
                                        }
                                    }
                                }(r);
                                t.xmpdata = s || {}
                            }
                            e && e.call(t)
                        }
                        if (t.src)
                            if (/^data\:/i.test(t.src)) r(function(t, e) {
                                e = e || t.match(/^data\:([^\;]+)\;base64,/im)[1] || "", t = t.replace(/^data\:([^\;]+)\;base64,/gim, "");
                                for (var r = atob(t), i = r.length, o = new ArrayBuffer(i), n = new Uint8Array(o), a = 0; a < i; a++) n[a] = r.charCodeAt(a);
                                return o
                            }(t.src));
                            else if (/^blob\:/i.test(t.src))(a = new FileReader).onload = function(t) {
                                r(t.target.result)
                            },
                            function(t, e) {
                                var r = new XMLHttpRequest;
                                r.open("GET", t, !0), r.responseType = "blob", r.onload = function(t) {
                                    var e;
                                    200 != this.status && 0 !== this.status || (e = this.response, a.readAsArrayBuffer(e))
                                }, r.send()
                            }(t.src);
                        else {
                            var n = new XMLHttpRequest;
                            n.onload = function() {
                                if (200 != this.status && 0 !== this.status) throw "Could not load image";
                                r(n.response), n = null
                            }, n.open("GET", t.src, !0), n.responseType = "arraybuffer", n.send(null)
                        } else if (self.FileReader && (t instanceof self.Blob || t instanceof self.File)) {
                            var a;
                            (a = new FileReader).onload = function(t) {
                                i && console.log("Got file of length " + t.target.result.byteLength), r(t.target.result)
                            }, a.readAsArrayBuffer(t)
                        }
                    }

                    function d(t) {
                        var e = new DataView(t);
                        if (i && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) return i && console.log("Not a valid JPEG"), !1;
                        for (var r, o = 2, n = t.byteLength; o < n;) {
                            if (255 != e.getUint8(o)) return i && console.log("Not a valid marker at offset " + o + ", found: " + e.getUint8(o)), !1;
                            if (r = e.getUint8(o + 1), i && console.log(r), 225 == r) return i && console.log("Found 0xFFE1 marker"), x(e, o + 4, e.getUint16(o + 2));
                            o += 2 + e.getUint16(o + 2)
                        }
                    }
                    var p = {
                        120: "caption",
                        110: "credit",
                        25: "keywords",
                        55: "dateCreated",
                        80: "byline",
                        85: "bylineTitle",
                        122: "captionWriter",
                        105: "headline",
                        116: "copyright",
                        15: "category"
                    };

                    function g(t, e, r) {
                        for (var i, o, n, a, s = new DataView(t), l = {}, c = e; c < e + r;) 28 === s.getUint8(c) && 2 === s.getUint8(c + 1) && (a = s.getUint8(c + 2)) in p && (n = s.getInt16(c + 3), o = p[a], i = v(s, c + 5, n), l.hasOwnProperty(o) ? l[o] instanceof Array ? l[o].push(i) : l[o] = [l[o], i] : l[o] = i), c++;
                        return l
                    }

                    function y(t, e, r, o, n) {
                        var a, s, l, c = t.getUint16(r, !n),
                            h = {};
                        for (l = 0; l < c; l++) a = r + 12 * l + 2, !(s = o[t.getUint16(a, !n)]) && i && console.log("Unknown tag: " + t.getUint16(a, !n)), h[s] = m(t, a, e, 0, n);
                        return h
                    }

                    function m(t, e, r, i, o) {
                        var n, a, s, l, c, h, u = t.getUint16(e + 2, !o),
                            f = t.getUint32(e + 4, !o),
                            d = t.getUint32(e + 8, !o) + r;
                        switch (u) {
                            case 1:
                            case 7:
                                if (1 == f) return t.getUint8(e + 8, !o);
                                for (n = f > 4 ? d : e + 8, a = [], l = 0; l < f; l++) a[l] = t.getUint8(n + l);
                                return a;
                            case 2:
                                return v(t, n = f > 4 ? d : e + 8, f - 1);
                            case 3:
                                if (1 == f) return t.getUint16(e + 8, !o);
                                for (n = f > 2 ? d : e + 8, a = [], l = 0; l < f; l++) a[l] = t.getUint16(n + 2 * l, !o);
                                return a;
                            case 4:
                                if (1 == f) return t.getUint32(e + 8, !o);
                                for (a = [], l = 0; l < f; l++) a[l] = t.getUint32(d + 4 * l, !o);
                                return a;
                            case 5:
                                if (1 == f) return c = t.getUint32(d, !o), h = t.getUint32(d + 4, !o), (s = new Number(c / h)).numerator = c, s.denominator = h, s;
                                for (a = [], l = 0; l < f; l++) c = t.getUint32(d + 8 * l, !o), h = t.getUint32(d + 4 + 8 * l, !o), a[l] = new Number(c / h), a[l].numerator = c, a[l].denominator = h;
                                return a;
                            case 9:
                                if (1 == f) return t.getInt32(e + 8, !o);
                                for (a = [], l = 0; l < f; l++) a[l] = t.getInt32(d + 4 * l, !o);
                                return a;
                            case 10:
                                if (1 == f) return t.getInt32(d, !o) / t.getInt32(d + 4, !o);
                                for (a = [], l = 0; l < f; l++) a[l] = t.getInt32(d + 8 * l, !o) / t.getInt32(d + 4 + 8 * l, !o);
                                return a
                        }
                    }

                    function v(t, e, r) {
                        var i = "";
                        for (n = e; n < e + r; n++) i += String.fromCharCode(t.getUint8(n));
                        return i
                    }

                    function x(t, e) {
                        if ("Exif" != v(t, e, 4)) return i && console.log("Not valid EXIF data! " + v(t, e, 4)), !1;
                        var r, o, n, u, f, d = e + 6;
                        if (18761 == t.getUint16(d)) r = !1;
                        else {
                            if (19789 != t.getUint16(d)) return i && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
                            r = !0
                        }
                        if (42 != t.getUint16(d + 2, !r)) return i && console.log("Not valid TIFF data! (no 0x002A)"), !1;
                        var p = t.getUint32(d + 4, !r);
                        if (p < 8) return i && console.log("Not valid TIFF data! (First offset less than 8)", t.getUint32(d + 4, !r)), !1;
                        if ((o = y(t, d, d + p, s, r)).ExifIFDPointer)
                            for (n in u = y(t, d, d + o.ExifIFDPointer, a, r)) {
                                switch (n) {
                                    case "LightSource":
                                    case "Flash":
                                    case "MeteringMode":
                                    case "ExposureProgram":
                                    case "SensingMethod":
                                    case "SceneCaptureType":
                                    case "SceneType":
                                    case "CustomRendered":
                                    case "WhiteBalance":
                                    case "GainControl":
                                    case "Contrast":
                                    case "Saturation":
                                    case "Sharpness":
                                    case "SubjectDistanceRange":
                                    case "FileSource":
                                        u[n] = h[n][u[n]];
                                        break;
                                    case "ExifVersion":
                                    case "FlashpixVersion":
                                        u[n] = String.fromCharCode(u[n][0], u[n][1], u[n][2], u[n][3]);
                                        break;
                                    case "ComponentsConfiguration":
                                        u[n] = h.Components[u[n][0]] + h.Components[u[n][1]] + h.Components[u[n][2]] + h.Components[u[n][3]]
                                }
                                o[n] = u[n]
                            }
                        if (o.GPSInfoIFDPointer)
                            for (n in f = y(t, d, d + o.GPSInfoIFDPointer, l, r)) "GPSVersionID" === n && (f[n] = f[n][0] + "." + f[n][1] + "." + f[n][2] + "." + f[n][3]), o[n] = f[n];
                        return o.thumbnail = function(t, e, r, i) {
                            var o = function(t, e, r) {
                                var i = t.getUint16(e, !r);
                                return t.getUint32(e + 2 + 12 * i, !r)
                            }(t, e + r, i);
                            if (!o) return {};
                            if (o > t.byteLength) return {};
                            var n = y(t, e, e + o, c, i);
                            if (n.Compression) switch (n.Compression) {
                                case 6:
                                    if (n.JpegIFOffset && n.JpegIFByteCount) {
                                        var a = e + n.JpegIFOffset,
                                            s = n.JpegIFByteCount;
                                        n.blob = new Blob([new Uint8Array(t.buffer, a, s)], {
                                            type: "image/jpeg"
                                        })
                                    }
                                    break;
                                case 1:
                                    console.log("Thumbnail image format is TIFF, which is not implemented.");
                                    break;
                                default:
                                    console.log("Unknown thumbnail image format '%s'", n.Compression)
                            } else 2 == n.PhotometricInterpretation && console.log("Thumbnail image format is RGB, which is not implemented.");
                            return n
                        }(t, d, p, r), o
                    }

                    function b(t) {
                        var e = {};
                        if (1 == t.nodeType) {
                            if (t.attributes.length > 0) {
                                e["@attributes"] = {};
                                for (var r = 0; r < t.attributes.length; r++) {
                                    var i = t.attributes.item(r);
                                    e["@attributes"][i.nodeName] = i.nodeValue
                                }
                            }
                        } else if (3 == t.nodeType) return t.nodeValue;
                        if (t.hasChildNodes())
                            for (var o = 0; o < t.childNodes.length; o++) {
                                var n = t.childNodes.item(o),
                                    a = n.nodeName;
                                if (null == e[a]) e[a] = b(n);
                                else {
                                    if (null == e[a].push) {
                                        var s = e[a];
                                        e[a] = [], e[a].push(s)
                                    }
                                    e[a].push(b(n))
                                }
                            }
                        return e
                    }

                    function S(t) {
                        try {
                            var e = {};
                            if (t.children.length > 0)
                                for (var r = 0; r < t.children.length; r++) {
                                    var i = t.children.item(r),
                                        o = i.attributes;
                                    for (var n in o) {
                                        var a = o[n],
                                            s = a.nodeName,
                                            l = a.nodeValue;
                                        void 0 !== s && (e[s] = l)
                                    }
                                    var c = i.nodeName;
                                    if (void 0 === e[c]) e[c] = b(i);
                                    else {
                                        if (void 0 === e[c].push) {
                                            var h = e[c];
                                            e[c] = [], e[c].push(h)
                                        }
                                        e[c].push(b(i))
                                    }
                                } else e = t.textContent;
                            return e
                        } catch (t) {
                            console.log(t.message)
                        }
                    }
                    o.enableXmp = function() {
                        o.isXmpEnabled = !0
                    }, o.disableXmp = function() {
                        o.isXmpEnabled = !1
                    }, o.getData = function(t, e) {
                        return !((self.Image && t instanceof self.Image || self.HTMLImageElement && t instanceof self.HTMLImageElement) && !t.complete || (u(t) ? e && e.call(t) : f(t, e), 0))
                    }, o.getTag = function(t, e) {
                        if (u(t)) return t.exifdata[e]
                    }, o.getIptcTag = function(t, e) {
                        if (u(t)) return t.iptcdata[e]
                    }, o.getAllTags = function(t) {
                        if (!u(t)) return {};
                        var e, r = t.exifdata,
                            i = {};
                        for (e in r) r.hasOwnProperty(e) && (i[e] = r[e]);
                        return i
                    }, o.getAllIptcTags = function(t) {
                        if (!u(t)) return {};
                        var e, r = t.iptcdata,
                            i = {};
                        for (e in r) r.hasOwnProperty(e) && (i[e] = r[e]);
                        return i
                    }, o.pretty = function(t) {
                        if (!u(t)) return "";
                        var e, r = t.exifdata,
                            i = "";
                        for (e in r) r.hasOwnProperty(e) && ("object" == typeof r[e] ? r[e] instanceof Number ? i += e + " : " + r[e] + " [" + r[e].numerator + "/" + r[e].denominator + "]\r\n" : i += e + " : [" + r[e].length + " values]\r\n" : i += e + " : " + r[e] + "\r\n");
                        return i
                    }, o.readFromBinaryFile = function(t) {
                        return d(t)
                    }, void 0 === (r = function() {
                        return o
                    }.apply(e, [])) || (t.exports = r)
                }).call(this)
            },
            3162: function(t, e, r) {
                var i, o;
                void 0 === (o = "function" == typeof(i = function() {
                    "use strict";

                    function e(t, e, r) {
                        var i = new XMLHttpRequest;
                        i.open("GET", t), i.responseType = "blob", i.onload = function() {
                            s(i.response, e, r)
                        }, i.onerror = function() {
                            console.error("could not download file")
                        }, i.send()
                    }

                    function i(t) {
                        var e = new XMLHttpRequest;
                        e.open("HEAD", t, !1);
                        try {
                            e.send()
                        } catch (t) {}
                        return 200 <= e.status && 299 >= e.status
                    }

                    function o(t) {
                        try {
                            t.dispatchEvent(new MouseEvent("click"))
                        } catch (r) {
                            var e = document.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e)
                        }
                    }
                    var n = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof r.g && r.g.global === r.g ? r.g : void 0,
                        a = n.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent),
                        s = n.saveAs || ("object" != typeof window || window !== n ? function() {} : "download" in HTMLAnchorElement.prototype && !a ? function(t, r, a) {
                            var s = n.URL || n.webkitURL,
                                l = document.createElement("a");
                            r = r || t.name || "download", l.download = r, l.rel = "noopener", "string" == typeof t ? (l.href = t, l.origin === location.origin ? o(l) : i(l.href) ? e(t, r, a) : o(l, l.target = "_blank")) : (l.href = s.createObjectURL(t), setTimeout((function() {
                                s.revokeObjectURL(l.href)
                            }), 4e4), setTimeout((function() {
                                o(l)
                            }), 0))
                        } : "msSaveOrOpenBlob" in navigator ? function(t, r, n) {
                            if (r = r || t.name || "download", "string" != typeof t) navigator.msSaveOrOpenBlob(function(t, e) {
                                return void 0 === e ? e = {
                                    autoBom: !1
                                } : "object" != typeof e && (console.warn("Deprecated: Expected third argument to be a object"), e = {
                                    autoBom: !e
                                }), e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\ufeff", t], {
                                    type: t.type
                                }) : t
                            }(t, n), r);
                            else if (i(t)) e(t, r, n);
                            else {
                                var a = document.createElement("a");
                                a.href = t, a.target = "_blank", setTimeout((function() {
                                    o(a)
                                }))
                            }
                        } : function(t, r, i, o) {
                            if ((o = o || open("", "_blank")) && (o.document.title = o.document.body.innerText = "downloading..."), "string" == typeof t) return e(t, r, i);
                            var s = "application/octet-stream" === t.type,
                                l = /constructor/i.test(n.HTMLElement) || n.safari,
                                c = /CriOS\/[\d]+/.test(navigator.userAgent);
                            if ((c || s && l || a) && "undefined" != typeof FileReader) {
                                var h = new FileReader;
                                h.onloadend = function() {
                                    var t = h.result;
                                    t = c ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = t : location = t, o = null
                                }, h.readAsDataURL(t)
                            } else {
                                var u = n.URL || n.webkitURL,
                                    f = u.createObjectURL(t);
                                o ? o.location = f : location.href = f, o = null, setTimeout((function() {
                                    u.revokeObjectURL(f)
                                }), 4e4)
                            }
                        });
                    n.saveAs = s.saveAs = s, t.exports = s
                }) ? i.apply(e, []) : i) || (t.exports = o)
            },
            8495: (module, exports, __webpack_require__) => {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                (function() {
                    "use strict";
                    var ERROR = "input is invalid type",
                        WINDOW = "object" == typeof window,
                        root = WINDOW ? window : {};
                    root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                    var WEB_WORKER = !WINDOW && "object" == typeof self,
                        NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                    NODE_JS ? root = __webpack_require__.g : WEB_WORKER && (root = self);
                    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && module.exports,
                        AMD = __webpack_require__.amdO,
                        ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                        HEX_CHARS = "0123456789abcdef".split(""),
                        EXTRA = [128, 32768, 8388608, -2147483648],
                        SHIFT = [0, 8, 16, 24],
                        OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
                        BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
                        blocks = [],
                        buffer8;
                    if (ARRAY_BUFFER) {
                        var buffer = new ArrayBuffer(68);
                        buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer)
                    }!root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(t) {
                        return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
                    });
                    var createOutputMethod = function(t) {
                            return function(e) {
                                return new Md5(!0).update(e)[t]()
                            }
                        },
                        createMethod = function() {
                            var t = createOutputMethod("hex");
                            NODE_JS && (t = nodeWrap(t)), t.create = function() {
                                return new Md5
                            }, t.update = function(e) {
                                return t.create().update(e)
                            };
                            for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
                                var r = OUTPUT_TYPES[e];
                                t[r] = createOutputMethod(r)
                            }
                            return t
                        },
                        nodeWrap = function(method) {
                            var crypto = eval("require('crypto')"),
                                Buffer = eval("require('buffer').Buffer"),
                                nodeMethod = function(t) {
                                    if ("string" == typeof t) return crypto.createHash("md5").update(t, "utf8").digest("hex");
                                    if (null == t) throw ERROR;
                                    return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(t)).digest("hex") : method(t)
                                };
                            return nodeMethod
                        };

                    function Md5(t) {
                        if (t) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks, this.buffer8 = buffer8;
                        else if (ARRAY_BUFFER) {
                            var e = new ArrayBuffer(68);
                            this.buffer8 = new Uint8Array(e), this.blocks = new Uint32Array(e)
                        } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                    }
                    Md5.prototype.update = function(t) {
                        if (!this.finalized) {
                            var e, r = typeof t;
                            if ("string" !== r) {
                                if ("object" !== r) throw ERROR;
                                if (null === t) throw ERROR;
                                if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                else if (!(Array.isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw ERROR;
                                e = !0
                            }
                            for (var i, o, n = 0, a = t.length, s = this.blocks, l = this.buffer8; n < a;) {
                                if (this.hashed && (this.hashed = !1, s[0] = s[16], s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), e)
                                    if (ARRAY_BUFFER)
                                        for (o = this.start; n < a && o < 64; ++n) l[o++] = t[n];
                                    else
                                        for (o = this.start; n < a && o < 64; ++n) s[o >> 2] |= t[n] << SHIFT[3 & o++];
                                else if (ARRAY_BUFFER)
                                    for (o = this.start; n < a && o < 64; ++n)(i = t.charCodeAt(n)) < 128 ? l[o++] = i : i < 2048 ? (l[o++] = 192 | i >> 6, l[o++] = 128 | 63 & i) : i < 55296 || i >= 57344 ? (l[o++] = 224 | i >> 12, l[o++] = 128 | i >> 6 & 63, l[o++] = 128 | 63 & i) : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++n)), l[o++] = 240 | i >> 18, l[o++] = 128 | i >> 12 & 63, l[o++] = 128 | i >> 6 & 63, l[o++] = 128 | 63 & i);
                                else
                                    for (o = this.start; n < a && o < 64; ++n)(i = t.charCodeAt(n)) < 128 ? s[o >> 2] |= i << SHIFT[3 & o++] : i < 2048 ? (s[o >> 2] |= (192 | i >> 6) << SHIFT[3 & o++], s[o >> 2] |= (128 | 63 & i) << SHIFT[3 & o++]) : i < 55296 || i >= 57344 ? (s[o >> 2] |= (224 | i >> 12) << SHIFT[3 & o++], s[o >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & o++], s[o >> 2] |= (128 | 63 & i) << SHIFT[3 & o++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(++n)), s[o >> 2] |= (240 | i >> 18) << SHIFT[3 & o++], s[o >> 2] |= (128 | i >> 12 & 63) << SHIFT[3 & o++], s[o >> 2] |= (128 | i >> 6 & 63) << SHIFT[3 & o++], s[o >> 2] |= (128 | 63 & i) << SHIFT[3 & o++]);
                                this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o
                            }
                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                        }
                    }, Md5.prototype.finalize = function() {
                        if (!this.finalized) {
                            this.finalized = !0;
                            var t = this.blocks,
                                e = this.lastByteIndex;
                            t[e >> 2] |= EXTRA[3 & e], e >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash()
                        }
                    }, Md5.prototype.hash = function() {
                        var t, e, r, i, o, n, a = this.blocks;
                        this.first ? e = ((e = ((t = ((t = a[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (r = ((r = (-271733879 ^ (i = ((i = (-1732584194 ^ 2004318071 & t) + a[1] - 117830708) << 12 | i >>> 20) + t << 0) & (-271733879 ^ t)) + a[2] - 1126478375) << 17 | r >>> 15) + i << 0) & (i ^ t)) + a[3] - 1316259209) << 22 | e >>> 10) + r << 0 : (t = this.h0, e = this.h1, r = this.h2, e = ((e += ((t = ((t += ((i = this.h3) ^ e & (r ^ i)) + a[0] - 680876936) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (i = ((i += (r ^ t & (e ^ r)) + a[1] - 389564586) << 12 | i >>> 20) + t << 0) & (t ^ e)) + a[2] + 606105819) << 17 | r >>> 15) + i << 0) & (i ^ t)) + a[3] - 1044525330) << 22 | e >>> 10) + r << 0), e = ((e += ((t = ((t += (i ^ e & (r ^ i)) + a[4] - 176418897) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (i = ((i += (r ^ t & (e ^ r)) + a[5] + 1200080426) << 12 | i >>> 20) + t << 0) & (t ^ e)) + a[6] - 1473231341) << 17 | r >>> 15) + i << 0) & (i ^ t)) + a[7] - 45705983) << 22 | e >>> 10) + r << 0, e = ((e += ((t = ((t += (i ^ e & (r ^ i)) + a[8] + 1770035416) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (i = ((i += (r ^ t & (e ^ r)) + a[9] - 1958414417) << 12 | i >>> 20) + t << 0) & (t ^ e)) + a[10] - 42063) << 17 | r >>> 15) + i << 0) & (i ^ t)) + a[11] - 1990404162) << 22 | e >>> 10) + r << 0, e = ((e += ((t = ((t += (i ^ e & (r ^ i)) + a[12] + 1804603682) << 7 | t >>> 25) + e << 0) ^ (r = ((r += (e ^ (i = ((i += (r ^ t & (e ^ r)) + a[13] - 40341101) << 12 | i >>> 20) + t << 0) & (t ^ e)) + a[14] - 1502002290) << 17 | r >>> 15) + i << 0) & (i ^ t)) + a[15] + 1236535329) << 22 | e >>> 10) + r << 0, e = ((e += ((i = ((i += (e ^ r & ((t = ((t += (r ^ i & (e ^ r)) + a[1] - 165796510) << 5 | t >>> 27) + e << 0) ^ e)) + a[6] - 1069501632) << 9 | i >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (i ^ t)) + a[11] + 643717713) << 14 | r >>> 18) + i << 0) ^ i)) + a[0] - 373897302) << 20 | e >>> 12) + r << 0, e = ((e += ((i = ((i += (e ^ r & ((t = ((t += (r ^ i & (e ^ r)) + a[5] - 701558691) << 5 | t >>> 27) + e << 0) ^ e)) + a[10] + 38016083) << 9 | i >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (i ^ t)) + a[15] - 660478335) << 14 | r >>> 18) + i << 0) ^ i)) + a[4] - 405537848) << 20 | e >>> 12) + r << 0, e = ((e += ((i = ((i += (e ^ r & ((t = ((t += (r ^ i & (e ^ r)) + a[9] + 568446438) << 5 | t >>> 27) + e << 0) ^ e)) + a[14] - 1019803690) << 9 | i >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (i ^ t)) + a[3] - 187363961) << 14 | r >>> 18) + i << 0) ^ i)) + a[8] + 1163531501) << 20 | e >>> 12) + r << 0, e = ((e += ((i = ((i += (e ^ r & ((t = ((t += (r ^ i & (e ^ r)) + a[13] - 1444681467) << 5 | t >>> 27) + e << 0) ^ e)) + a[2] - 51403784) << 9 | i >>> 23) + t << 0) ^ t & ((r = ((r += (t ^ e & (i ^ t)) + a[7] + 1735328473) << 14 | r >>> 18) + i << 0) ^ i)) + a[12] - 1926607734) << 20 | e >>> 12) + r << 0, e = ((e += ((n = (i = ((i += ((o = e ^ r) ^ (t = ((t += (o ^ i) + a[5] - 378558) << 4 | t >>> 28) + e << 0)) + a[8] - 2022574463) << 11 | i >>> 21) + t << 0) ^ t) ^ (r = ((r += (n ^ e) + a[11] + 1839030562) << 16 | r >>> 16) + i << 0)) + a[14] - 35309556) << 23 | e >>> 9) + r << 0, e = ((e += ((n = (i = ((i += ((o = e ^ r) ^ (t = ((t += (o ^ i) + a[1] - 1530992060) << 4 | t >>> 28) + e << 0)) + a[4] + 1272893353) << 11 | i >>> 21) + t << 0) ^ t) ^ (r = ((r += (n ^ e) + a[7] - 155497632) << 16 | r >>> 16) + i << 0)) + a[10] - 1094730640) << 23 | e >>> 9) + r << 0, e = ((e += ((n = (i = ((i += ((o = e ^ r) ^ (t = ((t += (o ^ i) + a[13] + 681279174) << 4 | t >>> 28) + e << 0)) + a[0] - 358537222) << 11 | i >>> 21) + t << 0) ^ t) ^ (r = ((r += (n ^ e) + a[3] - 722521979) << 16 | r >>> 16) + i << 0)) + a[6] + 76029189) << 23 | e >>> 9) + r << 0, e = ((e += ((n = (i = ((i += ((o = e ^ r) ^ (t = ((t += (o ^ i) + a[9] - 640364487) << 4 | t >>> 28) + e << 0)) + a[12] - 421815835) << 11 | i >>> 21) + t << 0) ^ t) ^ (r = ((r += (n ^ e) + a[15] + 530742520) << 16 | r >>> 16) + i << 0)) + a[2] - 995338651) << 23 | e >>> 9) + r << 0, e = ((e += ((i = ((i += (e ^ ((t = ((t += (r ^ (e | ~i)) + a[0] - 198630844) << 6 | t >>> 26) + e << 0) | ~r)) + a[7] + 1126891415) << 10 | i >>> 22) + t << 0) ^ ((r = ((r += (t ^ (i | ~e)) + a[14] - 1416354905) << 15 | r >>> 17) + i << 0) | ~t)) + a[5] - 57434055) << 21 | e >>> 11) + r << 0, e = ((e += ((i = ((i += (e ^ ((t = ((t += (r ^ (e | ~i)) + a[12] + 1700485571) << 6 | t >>> 26) + e << 0) | ~r)) + a[3] - 1894986606) << 10 | i >>> 22) + t << 0) ^ ((r = ((r += (t ^ (i | ~e)) + a[10] - 1051523) << 15 | r >>> 17) + i << 0) | ~t)) + a[1] - 2054922799) << 21 | e >>> 11) + r << 0, e = ((e += ((i = ((i += (e ^ ((t = ((t += (r ^ (e | ~i)) + a[8] + 1873313359) << 6 | t >>> 26) + e << 0) | ~r)) + a[15] - 30611744) << 10 | i >>> 22) + t << 0) ^ ((r = ((r += (t ^ (i | ~e)) + a[6] - 1560198380) << 15 | r >>> 17) + i << 0) | ~t)) + a[13] + 1309151649) << 21 | e >>> 11) + r << 0, e = ((e += ((i = ((i += (e ^ ((t = ((t += (r ^ (e | ~i)) + a[4] - 145523070) << 6 | t >>> 26) + e << 0) | ~r)) + a[11] - 1120210379) << 10 | i >>> 22) + t << 0) ^ ((r = ((r += (t ^ (i | ~e)) + a[2] + 718787259) << 15 | r >>> 17) + i << 0) | ~t)) + a[9] - 343485551) << 21 | e >>> 11) + r << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = e - 271733879 << 0, this.h2 = r - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + e << 0, this.h2 = this.h2 + r << 0, this.h3 = this.h3 + i << 0)
                    }, Md5.prototype.hex = function() {
                        this.finalize();
                        var t = this.h0,
                            e = this.h1,
                            r = this.h2,
                            i = this.h3;
                        return HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15]
                    }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function() {
                        this.finalize();
                        var t = this.h0,
                            e = this.h1,
                            r = this.h2,
                            i = this.h3;
                        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255]
                    }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function() {
                        this.finalize();
                        var t = new ArrayBuffer(16),
                            e = new Uint32Array(t);
                        return e[0] = this.h0, e[1] = this.h1, e[2] = this.h2, e[3] = this.h3, t
                    }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function() {
                        for (var t, e, r, i = "", o = this.array(), n = 0; n < 15;) t = o[n++], e = o[n++], r = o[n++], i += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[63 & (t << 4 | e >>> 4)] + BASE64_ENCODE_CHAR[63 & (e << 2 | r >>> 6)] + BASE64_ENCODE_CHAR[63 & r];
                        return t = o[n], i + (BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[t << 4 & 63] + "==")
                    };
                    var exports = createMethod();
                    COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return exports
                    }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                })()
            },
            5310: (t, e, r) => {
                "use strict";
                const i = L;
                var o = r.n(i);
                class n {
                    static db;
                    static KeyValues = "keyvalues";
                    static CoordsPointsStore = "coordsPoints";
                    static CoordsPointsIndex = "by_coords";
                    static CoordsPointsKey = "coords";
                    static initAndThen(t) {
                        const e = indexedDB.open("FOWDATABASE", 1);
                        e.onupgradeneeded = function(t) {
                            const r = e.result;
                            r.createObjectStore("files", {
                                keyPath: "TileID"
                            }).createIndex("by_TileID", "TileID", {
                                unique: !0
                            }), r.createObjectStore("points", {
                                keyPath: "TileID"
                            }).createIndex("by_TileID", "TileID", {
                                unique: !0
                            }), r.createObjectStore(n.KeyValues, {
                                keyPath: "key"
                            }).createIndex("by_key", "key", {
                                unique: !0
                            }), r.createObjectStore(n.CoordsPointsStore, {
                                keyPath: n.CoordsPointsKey
                            }).createIndex(n.CoordsPointsIndex, n.CoordsPointsKey, {
                                unique: !0
                            })
                        }, e.onsuccess = function() {
                            n.db = e.result, t()
                        }
                    }
                    static get(t, e) {
                        n.db.transaction(n.KeyValues, "readonly").objectStore(n.KeyValues).get(t).onsuccess = t => {
                            let r = t.target.result;
                            e(r ? r.value : null)
                        }
                    }
                    static set(t, e, r) {
                        const i = n.db.transaction(n.KeyValues, "readwrite");
                        i.objectStore(n.KeyValues).put({
                            key: t,
                            value: e
                        }), i.oncomplete = function() {
                            r && r()
                        }
                    }
                    static getBufferData(t, e) {
                        n.db.transaction("points", "readonly").objectStore("points").get(t).onsuccess = t => {
                            let r = t.target.result;
                            e(r ? r.points : null)
                        }
                    }
                    static getAllBufferData(t) {
                        n.db.transaction("points", "readonly").objectStore("points").getAll().onsuccess = e => {
                            let r = e.target.result;
                            t(r)
                        }
                    }
                    static setBufferData(t, e) {
                        const r = n.db.transaction("points", "readwrite"),
                            i = r.objectStore("points");
                        Object.entries(t).forEach((t => {
                            const [e, r] = t;
                            i.put({
                                TileID: e,
                                points: r
                            })
                        })), r.oncomplete = function() {
                            e()
                        }
                    }
                    static saveCoordsPoints(t, e) {
                        const r = n.db.transaction(n.CoordsPointsStore, "readwrite"),
                            i = r.objectStore(n.CoordsPointsStore);
                        Object.entries(t).forEach((t => {
                            const [e, r] = t;
                            i.put({
                                coords: e,
                                points: r
                            })
                        })), r.oncomplete = function() {
                            e()
                        }
                    }
                    static getCoordsPoints(t, e) {
                        n.db.transaction(n.CoordsPointsStore, "readonly").objectStore(n.CoordsPointsStore).get(t).onsuccess = r => {
                            console.log(t, r.target);
                            let i = r.target.result;
                            i && e(i)
                        }
                    }
                    static getAllCoordsPointsKeys(t) {
                        n.db.transaction(n.CoordsPointsStore, "readonly").objectStore(n.CoordsPointsStore).index(n.CoordsPointsIndex).getAllKeys().onsuccess = e => {
                            let r = e.target.result;
                            r && t(r)
                        }
                    }
                    static clear(t = null) {
                        let e = [n.CoordsPointsStore, "files", "points", n.KeyValues],
                            r = e.length;
                        for (let i of e) n.db.transaction(i, "readwrite").objectStore(i).clear().onsuccess = () => {
                            r--, 0 == r && t && t()
                        }
                    }
                }
                class a {
                    constructor(t, e) {
                        this.gl = t, this.offsetInBytes = 0, this.maxByteSize = e, this.vertBuffer = this.gl.createBuffer(), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertBuffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, e, this.gl.STATIC_DRAW), this.bufferInfo = {}
                    }
                    hasBuffer(t) {
                        return void 0 !== this.bufferInfo[t]
                    }
                    getBufferInfo(t) {
                        return this.bufferInfo[t]
                    }
                    clearBuffer(t) {
                        delete this.bufferInfo[t]
                    }
                    clearAllBuffer() {
                        this.offsetInBytes = 0, this.bufferInfo = {}
                    }
                    printInfo() {
                        let t = this.gl.getBufferParameter(this.gl.ARRAY_BUFFER, this.gl.BUFFER_SIZE),
                            e = this.gl.getBufferParameter(this.gl.ARRAY_BUFFER, this.gl.BUFFER_USAGE);
                        console.log((e / 1024 / 1024).toPrecision(5), "/", (t / 1024 / 1024).toFixed(5), "MB");
                        let r = 0,
                            i = 0;
                        Object.values(this.bufferInfo).forEach((t => r += t.byteLength)), Object.values(this.bufferInfo).filter((t => t.protect)).forEach((t => i += t.byteLength)), console.log("byte Sum: ", (r / 1024 / 1024).toPrecision(5), "MB"), console.log("byte Protect: ", (i / 1024 / 1024).toPrecision(5), "MB")
                    }
                    protect(t) {
                        this.bufferInfo[t].protect = !0
                    }
                    setBufferData(t, e, r) {
                        this.hasBuffer(t) && delete this.bufferInfo[t];
                        let i = e.byteLength;
                        this.checkProtectBuffer(i), r.offsetInBytes = this.offsetInBytes, r.byteLength = i, this.bufferInfo[t] = r, this.gl.bufferSubData(this.gl.ARRAY_BUFFER, this.offsetInBytes, e), this.offsetInBytes += i
                    }
                    checkProtectBuffer(t, e = 0) {
                        if (this.offsetInBytes + t >= this.maxByteSize && (this.offsetInBytes = 0), e > 100) throw "can not associate enough memory";
                        let r = Object.keys(this.bufferInfo);
                        for (let i = 0; i < r.length; i++) {
                            let o = r[i],
                                n = this.bufferInfo[o],
                                a = n.offsetInBytes;
                            if (this.offsetInBytes <= a && a < this.offsetInBytes + t) {
                                if (1 == n.protect) return this.offsetInBytes = n.offsetInBytes + n.byteLength, void this.checkProtectBuffer(t, e + 1);
                                delete this.bufferInfo[o]
                            }
                        }
                    }
                }
                const s = 1048576;
                class l {
                    constructor(t, e = {}) {
                        if (this.canvas = t, this.gl = this.canvas.getContext("webgl", {
                                antialias: !0
                            }), null == this.gl) throw "Getting webgl Error";
                        this.bufferSize = e.bufferSize || 8388608, this.bufferSize < s && (this.bufferSize = s), this.compileProgram(), this.ratio = 1, this.setPointSize(6), this.setColor(0, .5, 0, .8), this.setBackgroundColor(0, 0, 0, 0), this.setFogColor(0, 0, 0, .5)
                    }
                    compileProgram() {
                        const t = this.gl.createShader(this.gl.VERTEX_SHADER);
                        if (null == t) throw "Getting vertexShader Error";
                        this.gl.shaderSource(t, "\n    uniform mat4 u_matrix;\n    uniform vec4 a_color;\n    uniform vec4 a_color_bg;\n\n    attribute vec4 a_vertex;\n    attribute float a_pointSize;\n\n    varying vec4 v_color;\n    varying vec4 v_color_bg;\n\n    void main() {\n        // Set the size of the point\n        gl_PointSize =  a_pointSize;\n\n        // multiply each vertex by a matrix.\n        gl_Position = u_matrix * a_vertex;\n\n        // pass the color to the fragment shader\n        v_color = a_color;\n        v_color_bg = a_color_bg;\n    }\n"), this.gl.compileShader(t);
                        const e = this.gl.createShader(this.gl.FRAGMENT_SHADER);
                        if (null == e) throw "Getting fragmentShader Error";
                        if (this.gl.shaderSource(e, "\n    precision mediump float;\n    varying vec4 v_color;\n    varying vec4 v_color_bg;\n\n    void main() {\n        float border = 0.1;\n        float radius = 0.5;\n        vec4 color = v_color;\n        vec4 color0 = v_color_bg;\n\n        // ---------- Solution 1 --------------\n        vec2 m = gl_PointCoord.xy - vec2(0.5, 0.5);\n        float dist = radius - sqrt(m.x * m.x + m.y * m.y);\n\n        float t = 0.0;\n        if (dist > border)\n            t = 1.0;\n        else if (dist > 0.0)\n            t = dist / border;\n\n        // works for overlapping circles if blending is enabled\n        gl_FragColor = mix(color0, color, t);\n    }\n"), this.gl.compileShader(e), this.program = this.gl.createProgram(), null == this.program) throw "Getting program Error";
                        this.gl.attachShader(this.program, t), this.gl.attachShader(this.program, e), this.gl.linkProgram(this.program), this.gl.useProgram(this.program), this.gl.enable(this.gl.BLEND), this.bufferMNG = new a(this.gl, this.bufferSize), this.vertLoc = this.gl.getAttribLocation(this.program, "a_vertex"), this.gl.enableVertexAttribArray(this.vertLoc), this.colorLoc = this.gl.getUniformLocation(this.program, "a_color"), this.bgcolorLoc = this.gl.getUniformLocation(this.program, "a_color_bg"), this.u_matLoc = this.gl.getUniformLocation(this.program, "u_matrix"), this.pointSize = this.gl.getAttribLocation(this.program, "a_pointSize")
                    }
                    setBlendMode() {
                        let t = this.gl,
                            e = t.getExtension("EXT_blend_minmax");
                        t.blendEquation(e.MAX_EXT)
                    }
                    clear() {
                        let [t, e, r, i] = this.bgcolor;
                        this.gl.uniform4f(this.bgcolorLoc, t, e, r, i), this.gl.clearColor(t, e, r, i), this.gl.clear(this.gl.COLOR_BUFFER_BIT)
                    }
                    render(t) {
                        this.setBlendMode(), this.gl.drawArrays(this.gl.POINTS, 0, t)
                    }
                    setFogBlendMode() {
                        let t = this.gl.getExtension("EXT_blend_minmax");
                        this.gl.blendEquation(t.MIN_EXT)
                    }
                    coverWithFog() {
                        let [t, e, r, i] = this.fogColor;
                        this.gl.uniform4f(this.bgcolorLoc, t, e, r, i), this.gl.clearColor(t, e, r, i), this.gl.clear(this.gl.COLOR_BUFFER_BIT)
                    }
                    renderPathInFog(t) {
                        this.gl.uniform4f(this.colorLoc, 0, 0, 0, 0), this.setFogBlendMode(), this.gl.drawArrays(this.gl.POINTS, 0, t)
                    }
                    setPointsArray(t) {
                        t.BYTES_PER_ELEMENT, this.gl.bufferData(this.gl.ARRAY_BUFFER, t, this.gl.STATIC_DRAW)
                    }
                    setPointsArrayIndex(t) {
                        const e = Uint16Array.BYTES_PER_ELEMENT;
                        this.gl.vertexAttribPointer(this.vertLoc, 2, this.gl.UNSIGNED_SHORT, !1, 2 * e, e * t)
                    }
                    setBufferInfo(t, e) {
                        let r = {
                            vert: this.vertLoc,
                            size: 2,
                            type: this.gl.UNSIGNED_SHORT,
                            normalized: !1,
                            stride: 2 * Uint16Array.BYTES_PER_ELEMENT,
                            pointsCnt: e.length / 2
                        };
                        this.bufferMNG.setBufferData(t, e.buffer, r)
                    }
                    setUint8BufferInfo(t, e) {
                        let r = {
                            vert: this.vertLoc,
                            size: 2,
                            type: this.gl.UNSIGNED_BYTE,
                            normalized: !1,
                            stride: 2 * Uint8Array.BYTES_PER_ELEMENT,
                            pointsCnt: e.length / 2
                        };
                        this.bufferMNG.setBufferData(t, e.buffer, r)
                    }
                    useBufferID(t) {
                        let e = this.bufferMNG.getBufferInfo(t);
                        if (void 0 === e) throw "Buffer ID not exist" + t;
                        this.gl.vertexAttribPointer(e.vert, e.size, e.type, e.normalized, e.stride, e.offsetInBytes)
                    }
                    renderBuffer(t) {
                        this.useBufferID(t);
                        let e = this.bufferMNG.getBufferInfo(t).pointsCnt,
                            [r, i, o, n] = this.color;
                        this.gl.uniform4f(this.colorLoc, r, i, o, n), this.setBlendMode(), this.gl.drawArrays(this.gl.POINTS, 0, e)
                    }
                    renderBufferInFog(t) {
                        this.useBufferID(t);
                        let e = this.bufferMNG.getBufferInfo(t).pointsCnt;
                        this.gl.uniform4f(this.colorLoc, 0, 0, 0, 0), this.setFogBlendMode(), this.gl.drawArrays(this.gl.POINTS, 0, e)
                    }
                    setPixelRatio(t) {
                        if (t < .1 || t > 10) throw "Pixel Ratio Error: " + t;
                        this.ratio = t
                    }
                    setCanvasSize(t, e) {
                        this.canvas.width = t * this.ratio, this.canvas.height = e * this.ratio, this.gl.viewport(0, 0, t * this.ratio, e * this.ratio)
                    }
                    setViewport(t, e, r, i) {
                        this.gl.viewport(t * this.ratio, e * this.ratio, r * this.ratio, i * this.ratio)
                    }
                    setDataSize(t, e) {
                        this.setTransform(0, 0, t, e)
                    }
                    setTransform(t, e, r, i) {
                        const [o, n, a] = [2 / r, -2 / i, 0], [s, l, c] = [-1 - t * (2 / r), 1 - e * (-2 / i), 0], h = [o, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, 0, s, l, c, 1];
                        this.gl.uniformMatrix4fv(this.u_matLoc, !1, new Float32Array(h))
                    }
                    setBackgroundColor(t, e, r, i) {
                        this.bgcolor = [t, e, r, i]
                    }
                    setFogColor(t, e, r, i) {
                        this.fogColor = [t, e, r, i]
                    }
                    setColor(t, e, r, i) {
                        this.color = [t, e, r, i]
                    }
                    setPointSize(t) {
                        this.gl.vertexAttrib1f(this.pointSize, t)
                    }
                    fakeData(t, e, r, i = 0) {
                        let o = new Uint16Array(2 * r),
                            n = Math.random() * t,
                            a = Math.random() * e,
                            s = 1 + Math.random() * i,
                            l = s * (2 * Math.random() - 1),
                            c = s * (2 * Math.random() - 1);
                        for (let h = 0; h < r; h++) {
                            let r = Math.random();
                            r < .01 ? (n = Math.random() * t, a = Math.random() * e) : r < .1 / s ? s = 1 + Math.random() * i : r < .2 / s ? (l = s * (2 * Math.random() - 1), c = s * (2 * Math.random() - 1)) : (n += l, a += c), (n < 0 || n > t || a < 0 || a > e) && (n = Math.random() * t, a = Math.random() * e), o[2 * h] = Math.floor(n), o[2 * h + 1] = Math.floor(a)
                        }
                        return o
                    }
                }

                function c(t, e, r, i, o) {
                    return (1 - o) * (1 - o) * (1 - o) * t + 3 * (1 - o) * (1 - o) * o * e + 3 * (1 - o) * o * o * r + o * o * o * i
                }

                function h(t, e) {
                    let r = Math.pow(2, e);
                    return L.point(t % r, t / r).floor()
                }

                function u(t, e, r, i) {
                    this.cx = 3 * t, this.bx = 3 * (r - t) - this.cx, this.ax = 1 - this.cx - this.bx, this.cy = 3 * e, this.by = 3 * (i - e) - this.cy, this.ay = 1 - this.cy - this.by
                }

                function f(t, e, r, i) {
                    return "TILE" + t + ":" + [e, r, i].join(",")
                }

                function d(t) {
                    let e = t.split(":")[1],
                        [r, i, o] = e.split(",");
                    return 512 * parseInt(i) + parseInt(r)
                }
                Math.PI, Math.PI, u.prototype.epsilon = 1e-6, u.prototype.sampleCurveX = function(t) {
                    return ((this.ax * t + this.bx) * t + this.cx) * t
                }, u.prototype.sampleCurveY = function(t) {
                    return ((this.ay * t + this.by) * t + this.cy) * t
                }, u.prototype.sampleCurveDerivativeX = function(t) {
                    return (3 * this.ax * t + 2 * this.bx) * t + this.cx
                }, u.prototype.solveCurveX = function(t, e) {
                    var r, i, o, n, a, s;
                    for (o = t, s = 0; s < 8; s++) {
                        if (n = this.sampleCurveX(o) - t, Math.abs(n) < e) return o;
                        if (a = this.sampleCurveDerivativeX(o), Math.abs(a) < e) break;
                        o -= n / a
                    }
                    if ((o = t) < (r = 0)) return r;
                    if (o > (i = 1)) return i;
                    for (; r < i;) {
                        if (n = this.sampleCurveX(o), Math.abs(n - t) < e) return o;
                        t > n ? r = o : i = o, o = .5 * (i - r) + r
                    }
                    return o
                }, u.prototype.solve = function(t, e) {
                    return this.sampleCurveY(this.solveCurveX(t, e))
                };
                const p = 128;
                class g extends o().Layer {
                    constructor(t) {
                        super(t), this.canvas = o().DomUtil.create("canvas", "fogLayer"), this.webGL = new l(this.canvas, {
                            bufferSize: 33554432
                        }), this.webGL.setColor(0, .8, 0, .8), this.ratio = 1, this.setPixelRatio(1.5), this.globalRenderZoom = 7, this.pixelTL, this.tileIDs = [], this.toLoadTileList = new Set, this.noDataTileList = new Set, this.updateFrameID = 0, this.updateFrameTime = (new Date).getTime(), this.pixelOrigin, this.renderMode = "fog", this.lineWidth = 2, this.reloadAllFromDB()
                    }
                    setPixelRatio(t) {
                        this.ratio = t || 1, this.webGL.setPixelRatio(t)
                    }
                    get scale() {
                        return 1 / this.ratio
                    }
                    setGlobalRenderZoom(t) {
                        this.globalRenderZoom = t
                    }
                    getGlobalDPP(t) {
                        return t = t || this.zoom, Math.pow(2, 8 - t)
                    }
                    onAdd(t) {
                        this.map = t;
                        let e = t.getPane(this.options.pane);
                        return this.pane = e, null == this.pane || (this.pane.appendChild(this.canvas), t.on("move  moveend", this._update, this), t.on("resize zoomend", this._resize, this), t.on("zoomanim", this._zoomanim, this), this.zoom = t.getZoom(), this.updatePointSize(), this._resize()), this
                    }
                    onRemove(t) {
                        return o().DomUtil.remove(this.canvas), t.off("move moveend", this._update, this), t.off("resize zoomend", this._resize, this), t.off("zoomanim", this._zoomanim, this), this
                    }
                    loadBufferDataAndThenUpdate(t) {
                        if (this.toLoadTileList.has(t)) return;
                        this.toLoadTileList.add(t);
                        let e = this;
                        n.getBufferData(t, (function(r) {
                            e.toLoadTileList.delete(t), null != r ? (e.webGL.setBufferInfo(t, r), 0 == e.toLoadTileList.size && e._render("loadBufferDataAndThenUpdate")) : e.noDataTileList.add(t)
                        }))
                    }
                    _zoomanim(t) {
                        if (this.animFrameID && (o().Util.cancelAnimFrame(this.animFrameID), this._updateGlobalPosition()), null == this.centerLatLng) return;
                        let e = this.centerLatLng.clone(),
                            r = this.zoom || 0;
                        if (null == r) return;
                        let i, n, a = t.center,
                            s = t.zoom,
                            l = this;
                        this.animFrameID = o().Util.requestAnimFrame((function h(u) {
                            void 0 === i && (i = u, n = u);
                            const f = u - i;
                            if (f > 250) return l.animFrameID = 0, l.zoom = l.map?.getZoom(), l.updatePointSize(), void l._update();
                            let d = f / 250,
                                p = c(.25, 1, 1, 1, d);
                            l.zoom = r * (1 - p) + s * p, l.updatePointSize();
                            let g = c(.25, 1, 1, 1, d),
                                y = e.lat * (1 - g) + a.lat * g,
                                m = e.lng * (1 - g) + a.lng * g,
                                v = o().latLng(y, m);
                            l.centerLatLng = v, l.pixelTL = l.map.getPixelBounds(v, l.zoom).min, l.dataPerPixel = l.getGlobalDPP(), l.gDataStart = l.pixelTL.multiplyBy(l.dataPerPixel), l.dataSize = l.viewSize?.multiplyBy(l.dataPerPixel), l._render(t), l.animFrameID = o().Util.requestAnimFrame(h)
                        }))
                    }
                    _render(t) {
                        if (this.animFrameID && "zoomanim" != t.type) return;
                        "fog" == this.renderMode ? this.webGL.coverWithFog() : this.webGL.clear();
                        let e = this.filterTiles(),
                            r = this.getGlobalDPP(),
                            i = p / r,
                            o = 64;
                        this.zoom <= this.globalRenderZoom + 3 ? o = 8 : this.zoom <= this.globalRenderZoom && (o = 1), e.forEach((t => {
                            let e = h(t, 9).add([0, 1]).multiplyBy(p).divideBy(r).subtract(this.pixelTL);
                            e.y = this.viewSize.y - e.y;
                            let n = h(t, 9),
                                a = f(o, n.x, n.y, 9);
                            if (this.noDataTileList.has(a)) return;
                            let s = e.x,
                                l = e.y,
                                c = i,
                                u = i,
                                d = 0,
                                g = 0,
                                y = p * o,
                                m = p * o,
                                v = 0,
                                x = 0,
                                b = 0,
                                S = 0;
                            e.x < 0 && (v = -e.x / i, s = 0), e.x + i > 8192 && (x = (e.x + i - this.viewSize.x) / i), c = i * (1 - v - x), d = y * v, y *= 1 - v - x, e.y < 0 && (S = -e.y / i, l = 0), e.y + i > 8192 && (b = (e.y + i - this.viewSize.y) / i, g = m * b), u = i * (1 - S - b), m *= 1 - S - b, this.webGL.setViewport(s, l, c, u), this.webGL.setTransform(d, g, y, m), this.renderBuffer(a)
                        }))
                    }
                    renderBuffer(t) {
                        this.webGL.bufferMNG.hasBuffer(t) ? "fog" == this.renderMode ? this.webGL.renderBufferInFog(t) : this.webGL.renderBuffer(t) : this.loadBufferDataAndThenUpdate(t)
                    }
                    filterTiles() {
                        let t = this.gDataStart.divideBy(p).subtract([1, 1]),
                            e = this.gDataStart.add(this.dataSize).divideBy(p),
                            r = new(o().Bounds)(t, e);
                        return this.tileIDs.filter((t => {
                            let e = t % 512,
                                i = Math.floor(t / 512);
                            return r.contains([e, i])
                        }))
                    }
                    _resize(t) {
                        this.viewSize = this.map.getPixelBounds().getSize(), this.webGL.setCanvasSize(this.viewSize.x, this.viewSize.y), this.canvas.style.width = String(this.viewSize.x), this.canvas.style.height = String(this.viewSize.y), this._update(t)
                    }
                    setLineWidth(t) {
                        this.lineWidth = t
                    }
                    updatePointSize() {
                        this.pointSize = 1 * this.lineWidth * this.ratio, this.pointSize < 1 && (this.pointSize = 1), this.zoom < this.globalRenderZoom ? this.pointSize += this.zoom / 6 : this.zoom < this.globalRenderZoom + 3 ? this.pointSize += (this.zoom - this.globalRenderZoom) / 3 : this.zoom < this.globalRenderZoom + 6 && (this.pointSize += (this.zoom - this.globalRenderZoom - 3) / 3), this.zoom > 14 && (this.pointSize *= Math.pow(2, this.zoom - 14)), this.webGL.setPointSize(this.pointSize)
                    }
                    _updateGlobalPosition() {
                        this.pixelBounds = this.map.getPixelBounds(), this.orginOffset = this.map.getPixelOrigin().subtract(this.pixelBounds.min).multiplyBy(-1), this.centerLatLng = this.map.getCenter(), this.pixelTL = this.map.getPixelBounds().min, this.dataPerPixel = this.getGlobalDPP(), this.gDataStart = this.pixelTL.multiplyBy(this.dataPerPixel), this.dataSize = this.viewSize.multiplyBy(this.dataPerPixel)
                    }
                    _update(t) {
                        this._updateGlobalPosition(), o().DomUtil.setTransform(this.canvas, this.orginOffset, this.scale), this._render(t)
                    }
                    redraw() {
                        const t = (new Date).getTime();
                        this.updateFrameID && t - this.updateFrameTime < 10 && window.cancelAnimationFrame(this.updateFrameID), this.updateFrameTime = t, this.updateFrameID = window.requestAnimationFrame((() => {
                            this.updatePointSize(), this._resize(), this.updateFrameID = 0
                        }))
                    }
                    reloadAllFromDB() {
                        let t = this;
                        this.noDataTileList.clear(), this.webGL.bufferMNG.clearAllBuffer(), n.get("TileIDS", (function(e) {
                            t.tileIDs = e || [], t.redraw()
                        }))
                    }
                }
                var y = r(7641);

                function m(t) {
                    return "application/zip" == t.type || "application/octet-stream" == t.type || "multipart/x-zip" == t.type || "application/zip-compressed" == t.type || "application/x-zip-compressed" == t.type || "application/x-zip" == t.type
                }

                function v(t) {
                    return t.name.endsWith(".fwss")
                }

                function x(t) {
                    return t ? -1 == t.indexOf(".") ? null : t.split(".").at(-1).toLowerCase() : null
                }

                function b(t) {
                    return !!/^(?:image\/bmp|image\/gif|image\/jpeg|image\/png)$/i.test(t.type) || "heic" == x(t.name)
                }
                r(4341), r(4959), r(5738);
                const S = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        subdomains: ["a", "b", "c"]
                    }),
                    w = L.tileLayer("https://{s}.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png", {
                        subdomains: ["a", "b", "c"]
                    }),
                    _ = L.tileLayer("https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
                        subdomains: ["mt1", "mt2", "mt3"]
                    }),
                    P = L.tileLayer("https://{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", {
                        subdomains: ["mt1", "mt2", "mt3"]
                    }),
                    M = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"),
                    A = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"),
                    E = {
                        tileSize: 256,
                        tileDataSize: 512,
                        maxFogZoom: 13,
                        minFogZoom: 1,
                        maxNativeZoom: 15,
                        minNativeZoom: 2,
                        debug: !1,
                        baseMaps: {
                            // 智图: L.tileLayer.chinaProvider("Geoq.Normal.Map"),
                            // "智图(暖色)": L.tileLayer.chinaProvider("Geoq.Normal.Warm"),
                            // "智图(紫蓝色)": L.tileLayer.chinaProvider("Geoq.Normal.PurplishBlue"),
                            // "智图(灰色)": L.tileLayer.chinaProvider("Geoq.Normal.Gray"),
                            // 高德地图: L.tileLayer.chinaProvider("GaoDe.Normal.Map"),
                            // 高德地图7: L.tileLayer.chinaProvider("GaoDe.Normal.Map7"),
                            // 高德地图9: L.tileLayer.chinaProvider("GaoDe.Normal.Map9"),
                            // 高德卫星: L.tileLayer.chinaProvider("GaoDe.Satellite.Map"),
                            // 百度地图: L.tileLayer.chinaProvider("Baidu.Satellite.Map"),
                            // 腾讯地图: L.tileLayer.chinaProvider("Tencent.Normal.Map"),
                            // 四维地球: L.tileLayer.chinaProvider("SiweiEarth.Satellite.Map"),
                            // ArcGIS: A,
                            // ArcGIS卫星: M,
                            OpenStreet: S,
                            Google: _,
                            Google衛星: P,
                            OpenRailway: w,
                        }
                    },
                    z = pako;
                var T = r.n(z);

                function k(t, e = 1) {
                    let r = new Set,
                        i = Math.pow(2, 16);
                    for (let i = 0; i < t.length; i += 2) {
                        let o = t[i] >>> e,
                            n = t[i + 1] >>> e;
                        r.add((n << 16) + o)
                    }
                    let o = new Uint16Array(2 * r.size),
                        n = 0;
                    return r.forEach((t => {
                        let e = t >>> 16,
                            r = t % i;
                        o[2 * n] = r, o[2 * n + 1] = e, n++
                    })), o
                }

                function C(t, e, r) {
                    let i = Uint16Array.from(t);
                    if (0 == e && 0 == r) return i;
                    for (let t = 0; t < i.length; t += 2) i[t] += e, i[t + 1] += r;
                    return i
                }

                function D(t) {
                    let e = 0;
                    for (let r of t) e += r.length;
                    let r = new Uint16Array(e),
                        i = 0;
                    for (let e of t) r.set(e, i), i += e.length;
                    return r
                }

                function I(t, e, r) {
                    let i = Math.abs(t.x - e.x),
                        o = Math.abs(t.y - e.y);
                    return !(i > r || o > r) && Math.sqrt(i * i + o * o) < r
                }
                let B = 0;

                function F(t, e, r) {
                    let i = new Set,
                        o = 65536;
                    return e.forEach((t => {
                        i.add(t - o), i.add(t - 1), i.add(t + 1), i.add(t + o), i.add(t - 1 - o), i.add(t - 1 + o), i.add(t + 1 - o), i.add(t + 1 + o)
                    })), e = new Set, i.forEach((i => {
                        !r.has(i) && t.has(i) && function(t, e) {
                            let r = 65536,
                                i = [e - 1, e + 1, e - r, e + r, e - 1 - r, e - 1 + r, e + 1 - r, e + 1 + r],
                                o = 0;
                            for (let e of i)
                                if (t.has(e) && (o++, o > 3)) return !1;
                            return o <= 3
                        }(t, i) && e.add(i)
                    })), B += 1, e
                }

                function R(t) {
                    let e, r = new Uint32Array(t),
                        i = 0;
                    for (let t = 0; t < r.length; t++)
                        if (e = r[t], 0 != e)
                            for (; e;) e &= e - 1, i++;
                    return i
                }
                class G {
                    static pixelSize = 64;
                    static u8size = 8;
                    static u8Col = G.pixelSize / G.u8size;
                    static u8Row = G.pixelSize;
                    static arraySize = G.pixelSize * G.u8Col;
                    constructor(t) {
                        t && t.length == G.arraySize ? this.u8array = t.slice() : this.u8array = new Uint8Array(G.arraySize)
                    }
                    fromU8Array(t) {
                        t.length != G.arraySize ? console.log("wrong init uint8Arry size") : this.u8array = t.slice()
                    }
                    countPixels() {
                        return R(this.u8array.buffer)
                    }
                    toPoints() {
                        let t, e = [];
                        for (let r = 0; r < this.u8array.length; r++) {
                            if (t = this.u8array[r], 0 == t) continue;
                            let i = 7,
                                o = Math.floor(8 * r / 64);
                            for (; t;) {
                                if (1 & t) {
                                    let t = 8 * r % 64 + i;
                                    e.push(t, o)
                                }
                                t >>= 1, i--
                            }
                        }
                        return Uint16Array.from(e)
                    }
                    toPoints256() {
                        let t, e = [];
                        for (let r = 0; r < this.u8array.length; r++) {
                            if (t = this.u8array[r], 0 == t) continue;
                            let i = 7,
                                o = Math.floor(8 * r / 64);
                            for (; t;) {
                                if (1 & t) {
                                    let t = 8 * r % 64 + i;
                                    e.push(t, o)
                                }
                                t >>= 1, i--
                            }
                        }
                        return Uint8Array.from(e)
                    }
                    toPoints8() {
                        let t = [];
                        for (let i = 0; i < 8; i++)
                            for (let o = 0; o < 8; o++)
                                for (let n = 0; n < 64; n += 8) {
                                    let a = (r = 6, (e = {
                                        x: i,
                                        y: o
                                    }).x + e.y * Math.pow(2, r));
                                    if (this.u8array[a + n] > 0) {
                                        t.push(i, o);
                                        break
                                    }
                                }
                        var e, r;
                        return Uint16Array.from(t)
                    }
                    setXY(t, e, r = !0) {
                        let i = e * G.u8Col + (t >> 3),
                            o = t % 8;
                        r ? this.u8array[i] |= 128 >> o : this.u8array[i] &= 255 ^ 128 >> o
                    }
                    printPixel(t = 0) {
                        let e = "";
                        for (let t = 0; t < G.arraySize; t++)
                            if (t % G.u8Col == 0 && (console.log(e), e = ""), 0 != this.u8array[t])
                                for (let r = 0; r < 8; r++) this.u8array[t] & 128 >> r ? e += "*" : e += ".";
                            else e += "........"
                    }
                    printPixel8() {
                        for (let t = 0; t < 8; t++) {
                            let e = "";
                            for (let r = 0; r < 8; r++)
                                for (let i = 0; i < 8; i++) {
                                    if (this.u8array[64 * t + 8 * i + r]) {
                                        e += "*";
                                        break
                                    }
                                    7 == i && (e += ".")
                                }
                            console.log(e)
                        }
                    }
                    merge(t) {
                        if (t && t.u8array.length == G.arraySize)
                            for (let e = 0; e < t.u8array.length; e++) this.u8array[e] = this.u8array[e] | t.u8array[e]
                    }
                    clone() {
                        return new G(this.u8array)
                    }
                    fillZeroBetween1s() {
                        const t = G.u8Col;
                        for (let t = 0; t < this.u8array.length; t++)
                            if (this.u8array[t]) {
                                let e = this.u8array[t],
                                    r = e >> 1 & e << 1;
                                this.u8array[t] |= r
                            } for (let e = t; e < this.u8array.length - t; e++) {
                            let r = this.u8array[e - t] & this.u8array[e + t];
                            r && (this.u8array[e] |= r)
                        }
                    }
                }
                const U = proj4;
                var O = r.n(U);
                const N = Math.round,
                    X = Math.floor,
                    H = Math.min,
                    j = Math.max,
                    q = Math.pow,
                    W = (Math.log2, 6378137 * Math.PI);
                class Y {
                    constructor(t, e, r) {
                        this.x = Number(t), this.y = Number(e), this.z = Number(r)
                    }
                    static min(...t) {
                        let e = j(...t.map((t => t.z))),
                            r = H(...t.map((t => t.at(e).x))),
                            i = H(...t.map((t => t.at(e).y)));
                        return new Y(r, i, e)
                    }
                    static max(...t) {
                        let e = j(...t.map((t => t.z))),
                            r = j(...t.map((t => t.at(e).x))),
                            i = j(...t.map((t => t.at(e).y)));
                        return new Y(r, i, e)
                    }
                    static fromID(t, e) {
                        let r = q(2, e),
                            i = X(t % r),
                            o = X(t / r);
                        return console.assert(o < r, "y should less than 2^z"), new Y(i, o, e)
                    }
                    static fromKey(t) {
                        let [e, r, i] = t.split(",");
                        return new Y(+e, +r, +i)
                    }
                    static fromUintArrayKey(t) {
                        return console.assert(3 == t.length, "wrong uintarray"), new Y(t[0], t[1], t[2])
                    }
                    static size(t) {
                        return q(2, t)
                    }
                    toID() {
                        console.assert(X(this.z) == this.z, "z should be integer");
                        let t = this.floor();
                        return t.y * q(2, t.z) + t.x
                    }
                    toString() {
                        return [this.x, this.y, this.z].join(",")
                    }
                    toUniqId32() {
                        return this.x + (this.y << this.z) + (1 << 2 * this.z)
                    }
                    static fromUniqId32(t) {
                        let e = t,
                            r = -1;
                        for (; e;) r += 1, e >>>= 2;
                        return new Y(t % (1 << r), (t >>> r) % (1 << r), r)
                    }
                    toUintArrayKey() {
                        return this.z <= 8 ? Uint8Array.from([this.x, this.y, this.z]) : this.z <= 16 ? Uint16Array.from([this.x, this.y, this.z]) : Uint32Array.from([this.x, this.y, this.z])
                    }
                    clone() {
                        return new Y(this.x, this.y, this.z)
                    }
                    floor() {
                        return new Y(X(this.x), X(this.y), this.z)
                    }
                    round() {
                        return new Y(N(this.x), N(this.y), this.z)
                    }
                    add(t) {
                        t = t.at(this.z);
                        let e = q(2, this.z);
                        return this.x += t.x, this.y += t.y, console.assert(this.x <= e, "x should less than 2^z" + [this.x, this.y, this.z].join(",")), console.assert(this.y <= e, "y should less than 2^z" + [this.x, this.y, this.z].join(",")), this
                    }
                    addXYZ(t, e, r) {
                        return this.add(new Y(t, e, r))
                    }
                    sub(t) {
                        return t = t.at(this.z), this.x -= t.x, this.y -= t.y, this
                    }
                    subXYZ(t, e, r) {
                        return this.sub(new Y(t, e, r))
                    }
                    at(t) {
                        let e = Math.pow(2, t - this.z);
                        return new Y(this.x * e, this.y * e, t)
                    }
                    turn(t) {
                        let e = Math.pow(2, t - this.z);
                        return this.x *= e, this.y *= e, this.z = t, this
                    }
                    sizeAt(t) {
                        return q(2, t - this.z)
                    }
                    equal(t) {
                        return t = t.at(this.z), this.x == t.x && this.y == t.y
                    }
                    equalXYZ(t, e, r) {
                        return this.equal(new Y(t, e, r))
                    }
                    lessThan(t, e = !0) {
                        return t = t.at(this.z), e ? this.x <= t.x && this.y <= t.y : this.x < t.x && this.y < t.y
                    }
                    biggerThan(t, e = !0) {
                        return t = t.at(this.z), e ? this.x >= t.x && this.y >= t.y : this.x > t.x && this.y > t.y
                    }
                    isBetween(t, e, r = !0) {
                        let i = Y.min(t, e),
                            o = Y.max(t, e);
                        return this.biggerThan(i, r) && this.lessThan(o, r)
                    }
                    has(t) {
                        return !(t.z < this.z) && t.at(this.z).floor().equal(this)
                    }
                    inside(t) {
                        return !(t.z > this.z) && t.has(this)
                    }
                    offset(t) {
                        return this.add(t)
                    }
                    offsetNegative(t) {
                        return this.sub(t)
                    }
                    multify(t) {
                        return this.z += t.z, this.add(t)
                    }
                    divide(t) {
                        return this.sub(t), this.z -= t.z, this.assert(), this
                    }
                    assert() {
                        let {
                            x: t,
                            y: e,
                            z: r
                        } = this, i = q(2, this.z);
                        console.assert(-i <= r && r <= 31, "z should in [0, 32):" + [t, e, r].join(",")), console.assert(-i <= t && t <= i, "x should be [0, 2^z):" + [t, e, r].join(",")), console.assert(-i <= e && e <= i, "y should in [0, 2^z):" + [t, e, r].join(","))
                    }
                    getUnitAxis() {
                        let t = this.at(1).subXYZ(1, 1, 1);
                        return {
                            x: t.x,
                            y: -1 * t.y
                        }
                    }
                    getNwLngLat() {
                        let t = this.getUnitAxis();
                        return O()("WGS84", "EPSG:3857").inverse([W * t.x, W * t.y])
                    }
                    getSeLngLat() {
                        let t = this.clone().addXYZ(1, 1, this.z).getUnitAxis();
                        return O()("WGS84", "EPSG:3857").inverse([W * t.x, W * t.y])
                    }
                    getLngLatBounds() {
                        return [this.getNwLngLat(), this.getSeLngLat()]
                    }
                    getTotalArea(t) {
                        return t.area(this.toGeoJSON(t))
                    }
                    toGeoJSON(t) {
                        let e = this.getLngLatBounds(),
                            r = e[0][0],
                            i = e[0][1],
                            o = e[1][0],
                            n = e[1][1];
                        return t.polygon([
                            [
                                [r, i],
                                [r, n],
                                [o, n],
                                [o, i],
                                [r, i]
                            ]
                        ])
                    }
                    static fromLatLng(t, e, r) {
                        let i = O()("WGS84", "EPSG:3857").forward([t, e]),
                            o = q(2, r),
                            n = (i[0] / W + 1) * o / 2,
                            a = (1 - i[1] / W) * o / 2;
                        return new Y(X(n), X(a), r)
                    }
                    getSubZCoord() {
                        return new Y(this.x >> 1, this.y >> 1, this.z - 1)
                    }
                    getSubZPosition() {
                        return 1 & this.x && 1 & this.y ? "br" : 1 & this.x ? "tr" : 1 & this.y ? "bl" : "tl"
                    }
                }
                class V extends G {
                    constructor(t = new Uint8Array(512)) {
                        super(t), this.points = {}
                    }
                    clone() {
                        return new V(this.u8array)
                    }
                    merge(t) {
                        super.merge(t)
                    }
                    getRawImageBuffer() {
                        let t = new Uint8ClampedArray(16384),
                            e = this.u8array;
                        for (let r = 0; r <= e.length; r++) {
                            let i = e[r];
                            if (0 != i)
                                for (let e = 0; e < 8; e++) i & 128 >> e && (t[4 * (8 * r + e) + 3] = 255)
                        }
                        return t
                    }
                    getImageData() {
                        return new ImageData(this.getRawImageBuffer(), 64)
                    }
                    copyTo(t, e, r, i, o) {
                        let n = this.u8array;
                        for (let r = 0; r <= n.length; r++) {
                            let a = n[r];
                            if (0 != a)
                                for (let n = 0; n < 8; n++)
                                    if (a & 128 >> n) {
                                        let a = i + (8 * r + n) % 64;
                                        t[4 * ((o + Math.floor(r / 8)) * e + a) + 3] = 255
                                    }
                        }
                    }
                    blit(t, e, r, i = 64) {
                        let o = this.u8array;
                        for (let n = 0; n <= o.length; n++) {
                            if (0 == o[n]) continue;
                            let a = e + 8 * n % 64;
                            t[((r + Math.floor(8 * n / 64)) * i + a) / 8] = o[n]
                        }
                    }
                    partMerge(t, e) {
                        let r = "t" == e[0] ? 0 : 32,
                            i = "l" == e[1] ? 0 : 4;
                        for (let e = 0; e < t.u8array.length; e++) {
                            let o = t.u8array[e];
                            if (!o) continue;
                            o = 85 & (o >> 1 | o), o = parseInt(o.toString(4), 2);
                            let n = i + Math.floor(e % 8 / 2) + 8 * (r + Math.floor(e / 8 / 2));
                            this.u8array[n] = e % 2 ? this.u8array[n] | o : this.u8array[n] | o << 4
                        }
                    }
                    get memory() {
                        return 512
                    }
                    updatePoints() {
                        this.points[64] = this.toPoints();
                        let t = 64;
                        for (; t >= 4;) this.points[t / 2] = k(this.points[t]), t /= 2
                    }
                    getPoints(t) {
                        return this.points[t] || this.updatePoints(), this.points[t]
                    }
                    blitPotraceData(t, e, r, i) {
                        let o;
                        for (let n = 0; n < this.u8array.length; n++) {
                            if (o = this.u8array[n], 0 == o) continue;
                            let a = 7,
                                s = Math.floor(8 * n / 64);
                            for (; o;) 1 & o && (t[(s + r) * i + (e + (8 * n % 64 + a))] = 1), o >>= 1, a--
                        }
                    }
                }
                const Z = function() {
                        function t(t, e) {
                            this.x = t, this.y = e
                        }

                        function e(t, e) {
                            this.w = t, this.h = e, this.size = t * e, this.arraybuffer = new ArrayBuffer(this.size), this.data = new Int8Array(this.arraybuffer)
                        }

                        function r() {
                            this.area = 0, this.len = 0, this.curve = {}, this.pt = [], this.minX = 1e5, this.minY = 1e5, this.maxX = -1, this.maxY = -1
                        }

                        function i(t) {
                            this.n = t, this.tag = new Array(t), this.c = new Array(3 * t), this.alphaCurve = 0, this.vertex = new Array(t), this.alpha = new Array(t), this.alpha0 = new Array(t), this.beta = new Array(t)
                        }
                        t.prototype.copy = function() {
                            return new t(this.x, this.y)
                        }, e.prototype.at = function(t, e) {
                            return t >= 0 && t < this.w && e >= 0 && e < this.h && 1 === this.data[this.w * e + t]
                        }, e.prototype.index = function(e) {
                            var r = new t;
                            return r.y = Math.floor(e / this.w), r.x = e - r.y * this.w, r
                        }, e.prototype.flip = function(t, e) {
                            this.at(t, e) ? this.data[this.w * e + t] = 0 : this.data[this.w * e + t] = 1
                        }, e.prototype.copy = function() {
                            var t, r = new e(this.w, this.h);
                            for (t = 0; t < this.size; t++) r.data[t] = this.data[t];
                            return r
                        };
                        var o, n = null,
                            a = [],
                            s = {
                                isReady: !1,
                                turnpolicy: "minority",
                                turdsize: 2,
                                optcurve: !0,
                                alphamax: 1,
                                opttolerance: .2
                            };
                        return {
                            setBmData: function(t, r, i) {
                                (n = new e(r, i)).data = t, s.isReady = !0
                            },
                            setParameter: function(t) {
                                var e;
                                for (e in t) t.hasOwnProperty(e) && (s[e] = t[e])
                            },
                            process: function e(l) {
                                l && (o = l), s.isReady ? (function() {
                                    var e, i = n.copy(),
                                        o = new t(0, 0);

                                    function l(t) {
                                        for (var e = i.w * t.y + t.x; e < i.size && 1 !== i.data[e];) e++;
                                        return e < i.size && i.index(e)
                                    }

                                    function c(t, e) {
                                        var r, o, n;
                                        for (r = 2; r < 5; r++) {
                                            for (n = 0, o = 1 - r; o <= r - 1; o++) n += i.at(t + o, e + r - 1) ? 1 : -1, n += i.at(t + r - 1, e + o - 1) ? 1 : -1, n += i.at(t + o - 1, e - r) ? 1 : -1, n += i.at(t - r, e + o) ? 1 : -1;
                                            if (n > 0) return 1;
                                            if (n < 0) return 0
                                        }
                                        return 0
                                    }

                                    function h(e) {
                                        var o, a = new r,
                                            l = e.x,
                                            h = e.y,
                                            u = 0,
                                            f = 1;
                                        for (a.sign = n.at(e.x, e.y) ? "+" : "-"; a.pt.push(new t(l, h)), l > a.maxX && (a.maxX = l), l < a.minX && (a.minX = l), h > a.maxY && (a.maxY = h), h < a.minY && (a.minY = h), a.len++, l += u, h += f, a.area -= l * f, l !== e.x || h !== e.y;) {
                                            var d = i.at(l + (u + f - 1) / 2, h + (f - u - 1) / 2),
                                                p = i.at(l + (u - f - 1) / 2, h + (f + u - 1) / 2);
                                            p && !d ? "right" === s.turnpolicy || "black" === s.turnpolicy && "+" === a.sign || "white" === s.turnpolicy && "-" === a.sign || "majority" === s.turnpolicy && c(l, h) || "minority" === s.turnpolicy && !c(l, h) ? (o = u, u = -f, f = o) : (o = u, u = f, f = -o) : p ? (o = u, u = -f, f = o) : d || (o = u, u = f, f = -o)
                                        }
                                        return a
                                    }

                                    function u(t) {
                                        var e, r, o, n, a, s, l = t.pt[0].y,
                                            c = t.len;
                                        for (a = 1; a < c; a++)
                                            if (e = t.pt[a].x, (r = t.pt[a].y) !== l) {
                                                for (n = l < r ? l : r, o = t.maxX, s = e; s < o; s++) i.flip(s, n);
                                                l = r
                                            }
                                    }
                                    for (; o = l(o);) u(e = h(o)), e.area > s.turdsize && a.push(e)
                                }(), function() {
                                    function e() {
                                        this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0]
                                    }

                                    function r(t, e, r, i, o) {
                                        this.x = t, this.y = e, this.xy = r, this.x2 = i, this.y2 = o
                                    }

                                    function o(t, e) {
                                        return t >= e ? t % e : t >= 0 ? t : e - 1 - (-1 - t) % e
                                    }

                                    function n(t, e) {
                                        return t.x * e.y - t.y * e.x
                                    }

                                    function l(t, e, r) {
                                        return t <= r ? t <= e && e < r : t <= e || e < r
                                    }

                                    function c(t) {
                                        return t > 0 ? 1 : t < 0 ? -1 : 0
                                    }

                                    function h(t, e) {
                                        var r, i, o, n = new Array(3);
                                        for (n[0] = e.x, n[1] = e.y, n[2] = 1, o = 0, r = 0; r < 3; r++)
                                            for (i = 0; i < 3; i++) o += n[r] * t.at(r, i) * n[i];
                                        return o
                                    }

                                    function u(e, r, i) {
                                        var o = new t;
                                        return o.x = r.x + e * (i.x - r.x), o.y = r.y + e * (i.y - r.y), o
                                    }

                                    function f(e, r) {
                                        var i = function(e, r) {
                                            var i = new t;
                                            return i.y = c(r.x - e.x), i.x = -c(r.y - e.y), i
                                        }(e, r);
                                        return i.y * (r.x - e.x) - i.x * (r.y - e.y)
                                    }

                                    function d(t, e, r) {
                                        var i, o, n;
                                        return i = e.x - t.x, o = e.y - t.y, n = r.x - t.x, i * (r.y - t.y) - n * o
                                    }

                                    function p(t, e, r, i) {
                                        var o, n, a;
                                        return o = e.x - t.x, n = e.y - t.y, a = i.x - r.x, o * (i.y - r.y) - a * n
                                    }

                                    function g(t, e, r) {
                                        var i, o;
                                        return i = e.x - t.x, o = e.y - t.y, i * (r.x - t.x) + o * (r.y - t.y)
                                    }

                                    function y(t, e, r, i) {
                                        var o, n;
                                        return o = e.x - t.x, n = e.y - t.y, o * (i.x - r.x) + n * (i.y - r.y)
                                    }

                                    function m(t, e) {
                                        return Math.sqrt((t.x - e.x) * (t.x - e.x) + (t.y - e.y) * (t.y - e.y))
                                    }

                                    function v(e, r, i, o, n) {
                                        var a = 1 - e,
                                            s = new t;
                                        return s.x = a * a * a * r.x + a * a * e * 3 * i.x + e * e * a * 3 * o.x + e * e * e * n.x, s.y = a * a * a * r.y + a * a * e * 3 * i.y + e * e * a * 3 * o.y + e * e * e * n.y, s
                                    }

                                    function x(t, e, r, i, o, n) {
                                        var a, s, l, c, h, u, f, d;
                                        return h = (c = -2 * (a = p(t, e, o, n)) + 2 * (s = p(e, r, o, n))) * c - 4 * (l = a - 2 * s + p(r, i, o, n)) * a, 0 === l || h < 0 ? -1 : (d = (-c - (u = Math.sqrt(h))) / (2 * l), (f = (-c + u) / (2 * l)) >= 0 && f <= 1 ? f : d >= 0 && d <= 1 ? d : -1)
                                    }

                                    function b(t) {
                                        var e, i, o;
                                        t.x0 = t.pt[0].x, t.y0 = t.pt[0].y, t.sums = [];
                                        var n = t.sums;
                                        for (n.push(new r(0, 0, 0, 0, 0)), e = 0; e < t.len; e++) i = t.pt[e].x - t.x0, o = t.pt[e].y - t.y0, n.push(new r(n[e].x + i, n[e].y + o, n[e].xy + i * o, n[e].x2 + i * i, n[e].y2 + o * o))
                                    }

                                    function S(e) {
                                        var r = e.len,
                                            i = e.pt,
                                            a = new Array(r),
                                            s = new Array(r),
                                            h = new Array(4);
                                        e.lon = new Array(r);
                                        var u, f, d, p, g, y, m, v, x = [new t, new t],
                                            b = new t,
                                            S = new t,
                                            w = new t,
                                            _ = 0;
                                        for (f = r - 1; f >= 0; f--) i[f].x != i[_].x && i[f].y != i[_].y && (_ = f + 1), s[f] = _;
                                        for (f = r - 1; f >= 0; f--) {
                                            for (h[0] = h[1] = h[2] = h[3] = 0, h[(3 + 3 * (i[o(f + 1, r)].x - i[f].x) + (i[o(f + 1, r)].y - i[f].y)) / 2]++, x[0].x = 0, x[0].y = 0, x[1].x = 0, x[1].y = 0, _ = s[f], p = f;;) {
                                                if (u = 0, h[(3 + 3 * c(i[_].x - i[p].x) + c(i[_].y - i[p].y)) / 2]++, h[0] && h[1] && h[2] && h[3]) {
                                                    a[f] = p, u = 1;
                                                    break
                                                }
                                                if (b.x = i[_].x - i[f].x, b.y = i[_].y - i[f].y, n(x[0], b) < 0 || n(x[1], b) > 0) break;
                                                if (Math.abs(b.x) <= 1 && Math.abs(b.y) <= 1 || (S.x = b.x + (b.y >= 0 && (b.y > 0 || b.x < 0) ? 1 : -1), S.y = b.y + (b.x <= 0 && (b.x < 0 || b.y < 0) ? 1 : -1), n(x[0], S) >= 0 && (x[0].x = S.x, x[0].y = S.y), S.x = b.x + (b.y <= 0 && (b.y < 0 || b.x < 0) ? 1 : -1), S.y = b.y + (b.x >= 0 && (b.x > 0 || b.y < 0) ? 1 : -1), n(x[1], S) <= 0 && (x[1].x = S.x, x[1].y = S.y)), !l(_ = s[p = _], f, p)) break
                                            }
                                            0 === u && (w.x = c(i[_].x - i[p].x), w.y = c(i[_].y - i[p].y), b.x = i[p].x - i[f].x, b.y = i[p].y - i[f].y, g = n(x[0], b), y = n(x[0], w), m = n(x[1], b), v = n(x[1], w), d = 1e7, y < 0 && (d = Math.floor(g / -y)), v > 0 && (d = Math.min(d, Math.floor(-m / v))), a[f] = o(p + d, r))
                                        }
                                        for (d = a[r - 1], e.lon[r - 1] = d, f = r - 2; f >= 0; f--) l(f + 1, a[f], d) && (d = a[f]), e.lon[f] = d;
                                        for (f = r - 1; l(o(f + 1, r), d, e.lon[f]); f--) e.lon[f] = d
                                    }

                                    function w(t) {
                                        function e(t, e, r) {
                                            var i, o, n, a, s, l, c, h, u, f, d, p = t.len,
                                                g = t.pt,
                                                y = t.sums,
                                                m = 0;
                                            return r >= p && (r -= p, m = 1), 0 === m ? (i = y[r + 1].x - y[e].x, o = y[r + 1].y - y[e].y, a = y[r + 1].x2 - y[e].x2, n = y[r + 1].xy - y[e].xy, s = y[r + 1].y2 - y[e].y2, l = r + 1 - e) : (i = y[r + 1].x - y[e].x + y[p].x, o = y[r + 1].y - y[e].y + y[p].y, a = y[r + 1].x2 - y[e].x2 + y[p].x2, n = y[r + 1].xy - y[e].xy + y[p].xy, s = y[r + 1].y2 - y[e].y2 + y[p].y2, l = r + 1 - e + p), h = (g[e].x + g[r].x) / 2 - g[0].x, u = (g[e].y + g[r].y) / 2 - g[0].y, d = g[r].x - g[e].x, c = (f = -(g[r].y - g[e].y)) * f * ((a - 2 * i * h) / l + h * h) + 2 * f * d * ((n - i * u - o * h) / l + h * u) + d * d * ((s - 2 * o * u) / l + u * u), Math.sqrt(c)
                                        }
                                        var r, i, n, a, s, l, c, h = t.len,
                                            u = new Array(h + 1),
                                            f = new Array(h + 1),
                                            d = new Array(h),
                                            p = new Array(h + 1),
                                            g = new Array(h + 1),
                                            y = new Array(h + 1);
                                        for (r = 0; r < h; r++)(c = o(t.lon[o(r - 1, h)] - 1, h)) == r && (c = o(r + 1, h)), d[r] = c < r ? h : c;
                                        for (i = 1, r = 0; r < h; r++)
                                            for (; i <= d[r];) p[i] = r, i++;
                                        for (r = 0, i = 0; r < h; i++) g[i] = r, r = d[r];
                                        for (g[i] = h, r = h, i = n = i; i > 0; i--) y[i] = r, r = p[r];
                                        for (y[0] = 0, u[0] = 0, i = 1; i <= n; i++)
                                            for (r = y[i]; r <= g[i]; r++) {
                                                for (l = -1, a = g[i - 1]; a >= p[r]; a--) s = e(t, a, r) + u[a], (l < 0 || s < l) && (f[r] = a, l = s);
                                                u[r] = l
                                            }
                                        for (t.m = n, t.po = new Array(n), r = h, i = n - 1; r > 0; i--) r = f[r], t.po[i] = r
                                    }

                                    function _(r) {
                                        function n(t, e, r, i, o) {
                                            for (var n, a, s, l, c, h, u, f, d, p, g, y = t.len, m = t.sums, v = 0; r >= y;) r -= y, v += 1;
                                            for (; e >= y;) e -= y, v -= 1;
                                            for (; r < 0;) r += y, v -= 1;
                                            for (; e < 0;) e += y, v += 1;
                                            n = m[r + 1].x - m[e].x + v * m[y].x, a = m[r + 1].y - m[e].y + v * m[y].y, s = m[r + 1].x2 - m[e].x2 + v * m[y].x2, l = m[r + 1].xy - m[e].xy + v * m[y].xy, c = m[r + 1].y2 - m[e].y2 + v * m[y].y2, h = r + 1 - e + v * y, i.x = n / h, i.y = a / h, u = (s - n * n / h) / h, f = (l - n * a / h) / h, u -= p = (u + (d = (c - a * a / h) / h) + Math.sqrt((u - d) * (u - d) + 4 * f * f)) / 2, d -= p, Math.abs(u) >= Math.abs(d) ? 0 !== (g = Math.sqrt(u * u + f * f)) && (o.x = -f / g, o.y = u / g) : 0 !== (g = Math.sqrt(d * d + f * f)) && (o.x = -d / g, o.y = f / g), 0 === g && (o.x = o.y = 0)
                                        }
                                        var a, s, l, c, u, f, d, p, g, y, m, v, x, b, S, w = r.m,
                                            _ = r.po,
                                            P = r.len,
                                            M = r.pt,
                                            A = r.x0,
                                            L = r.y0,
                                            E = new Array(w),
                                            z = new Array(w),
                                            T = new Array(w),
                                            k = new Array(3),
                                            C = new t;
                                        for (r.curve = new i(w), s = 0; s < w; s++) l = _[o(s + 1, w)], l = o(l - _[s], P) + _[s], E[s] = new t, z[s] = new t, n(r, _[s], l, E[s], z[s]);
                                        for (s = 0; s < w; s++)
                                            if (T[s] = new e, 0 == (a = z[s].x * z[s].x + z[s].y * z[s].y))
                                                for (l = 0; l < 3; l++)
                                                    for (c = 0; c < 3; c++) T[s].data[3 * l + c] = 0;
                                            else
                                                for (k[0] = z[s].y, k[1] = -z[s].x, k[2] = -k[1] * E[s].y - k[0] * E[s].x, u = 0; u < 3; u++)
                                                    for (c = 0; c < 3; c++) T[s].data[3 * u + c] = k[u] * k[c] / a;
                                        for (s = 0; s < w; s++) {
                                            for (f = new e, d = new t, C.x = M[_[s]].x - A, C.y = M[_[s]].y - L, l = o(s - 1, w), u = 0; u < 3; u++)
                                                for (c = 0; c < 3; c++) f.data[3 * u + c] = T[l].at(u, c) + T[s].at(u, c);
                                            for (;;) {
                                                if (0 != (y = f.at(0, 0) * f.at(1, 1) - f.at(0, 1) * f.at(1, 0))) {
                                                    d.x = (-f.at(0, 2) * f.at(1, 1) + f.at(1, 2) * f.at(0, 1)) / y, d.y = (f.at(0, 2) * f.at(1, 0) - f.at(1, 2) * f.at(0, 0)) / y;
                                                    break
                                                }
                                                for (f.at(0, 0) > f.at(1, 1) ? (k[0] = -f.at(0, 1), k[1] = f.at(0, 0)) : f.at(1, 1) ? (k[0] = -f.at(1, 1), k[1] = f.at(1, 0)) : (k[0] = 1, k[1] = 0), a = k[0] * k[0] + k[1] * k[1], k[2] = -k[1] * C.y - k[0] * C.x, u = 0; u < 3; u++)
                                                    for (c = 0; c < 3; c++) f.data[3 * u + c] += k[u] * k[c] / a
                                            }
                                            if (p = Math.abs(d.x - C.x), g = Math.abs(d.y - C.y), p <= .5 && g <= .5) r.curve.vertex[s] = new t(d.x + A, d.y + L);
                                            else {
                                                if (m = h(f, C), x = C.x, b = C.y, 0 !== f.at(0, 0))
                                                    for (S = 0; S < 2; S++) d.y = C.y - .5 + S, d.x = -(f.at(0, 1) * d.y + f.at(0, 2)) / f.at(0, 0), p = Math.abs(d.x - C.x), v = h(f, d), p <= .5 && v < m && (m = v, x = d.x, b = d.y);
                                                if (0 !== f.at(1, 1))
                                                    for (S = 0; S < 2; S++) d.x = C.x - .5 + S, d.y = -(f.at(1, 0) * d.x + f.at(1, 2)) / f.at(1, 1), g = Math.abs(d.y - C.y), v = h(f, d), g <= .5 && v < m && (m = v, x = d.x, b = d.y);
                                                for (u = 0; u < 2; u++)
                                                    for (c = 0; c < 2; c++) d.x = C.x - .5 + u, d.y = C.y - .5 + c, (v = h(f, d)) < m && (m = v, x = d.x, b = d.y);
                                                r.curve.vertex[s] = new t(x + A, b + L)
                                            }
                                        }
                                    }

                                    function P(t) {
                                        var e, r, i, o = t.curve,
                                            n = o.n,
                                            a = o.vertex;
                                        for (e = 0, r = n - 1; e < r; e++, r--) i = a[e], a[e] = a[r], a[r] = i
                                    }

                                    function M(t) {
                                        var e, r, i, n, a, l, c, h, p, g = t.curve.n,
                                            y = t.curve;
                                        for (e = 0; e < g; e++) r = o(e + 1, g), i = o(e + 2, g), p = u(.5, y.vertex[i], y.vertex[r]), 0 !== (a = f(y.vertex[e], y.vertex[i])) ? (n = d(y.vertex[e], y.vertex[r], y.vertex[i]) / a, l = (n = Math.abs(n)) > 1 ? 1 - 1 / n : 0, l /= .75) : l = 4 / 3, y.alpha0[r] = l, l >= s.alphamax ? (y.tag[r] = "CORNER", y.c[3 * r + 1] = y.vertex[r], y.c[3 * r + 2] = p) : (l < .55 ? l = .55 : l > 1 && (l = 1), c = u(.5 + .5 * l, y.vertex[e], y.vertex[r]), h = u(.5 + .5 * l, y.vertex[i], y.vertex[r]), y.tag[r] = "CURVE", y.c[3 * r + 0] = c, y.c[3 * r + 1] = h, y.c[3 * r + 2] = p), y.alpha[r] = l, y.beta[r] = .5;
                                        y.alphacurve = 1
                                    }

                                    function A(e) {
                                        function r() {
                                            this.pen = 0, this.c = [new t, new t], this.t = 0, this.s = 0, this.alpha = 0
                                        }

                                        function n(t, e, r, i, n, a, s) {
                                            var l, h, f, b, S, w, _, P, M, A, L, E, z, T, k, C, D, I, B, F, R, G, U = t.curve.n,
                                                O = t.curve,
                                                N = O.vertex;
                                            if (e == r) return 1;
                                            if (l = e, S = o(e + 1, U), 0 === (b = a[h = o(l + 1, U)])) return 1;
                                            for (P = m(N[e], N[S]), l = h; l != r; l = h) {
                                                if (h = o(l + 1, U), f = o(l + 2, U), a[h] != b) return 1;
                                                if (c(p(N[e], N[S], N[h], N[f])) != b) return 1;
                                                if (y(N[e], N[S], N[h], N[f]) < P * m(N[h], N[f]) * -.999847695156) return 1
                                            }
                                            if (L = O.c[3 * o(e, U) + 2].copy(), E = N[o(e + 1, U)].copy(), z = N[o(r, U)].copy(), T = O.c[3 * o(r, U) + 2].copy(), w = s[r] - s[e], w -= d(N[0], O.c[3 * e + 2], O.c[3 * r + 2]) / 2, e >= r && (w += s[U]), I = d(L, E, z), B = d(L, E, T), F = d(L, z, T), B == I) return 1;
                                            if (R = B / (B - I), 0 == (C = B * (G = F / (F - (I + F - B))) / 2)) return 1;
                                            for (D = w / C, _ = 2 - Math.sqrt(4 - D / .3), i.c[0] = u(G * _, L, E), i.c[1] = u(R * _, T, z), i.alpha = _, i.t = G, i.s = R, E = i.c[0].copy(), z = i.c[1].copy(), i.pen = 0, l = o(e + 1, U); l != r; l = h) {
                                                if (h = o(l + 1, U), (G = x(L, E, z, T, N[l], N[h])) < -.5) return 1;
                                                if (k = v(G, L, E, z, T), 0 === (P = m(N[l], N[h]))) return 1;
                                                if (M = d(N[l], N[h], k) / P, Math.abs(M) > n) return 1;
                                                if (g(N[l], N[h], k) < 0 || g(N[h], N[l], k) < 0) return 1;
                                                i.pen += M * M
                                            }
                                            for (l = e; l != r; l = h) {
                                                if (h = o(l + 1, U), (G = x(L, E, z, T, O.c[3 * l + 2], O.c[3 * h + 2])) < -.5) return 1;
                                                if (k = v(G, L, E, z, T), 0 === (P = m(O.c[3 * l + 2], O.c[3 * h + 2]))) return 1;
                                                if (M = d(O.c[3 * l + 2], O.c[3 * h + 2], k) / P, A = d(O.c[3 * l + 2], O.c[3 * h + 2], N[h]) / P, (A *= .75 * O.alpha[h]) < 0 && (M = -M, A = -A), M < A - n) return 1;
                                                M < A && (i.pen += (M - A) * (M - A))
                                            }
                                            return 0
                                        }
                                        var a, l, h, f, b, S, w, _, P, M, A = e.curve,
                                            L = A.n,
                                            E = A.vertex,
                                            z = new Array(L + 1),
                                            T = new Array(L + 1),
                                            k = new Array(L + 1),
                                            C = new Array(L + 1),
                                            D = new r,
                                            I = new Array(L),
                                            B = new Array(L + 1);
                                        for (l = 0; l < L; l++) "CURVE" == A.tag[l] ? I[l] = c(d(E[o(l - 1, L)], E[l], E[o(l + 1, L)])) : I[l] = 0;
                                        for (S = 0, B[0] = 0, f = A.vertex[0], l = 0; l < L; l++) b = o(l + 1, L), "CURVE" == A.tag[b] && (S += .3 * (w = A.alpha[b]) * (4 - w) * d(A.c[3 * l + 2], E[b], A.c[3 * b + 2]) / 2, S += d(f, A.c[3 * l + 2], A.c[3 * b + 2]) / 2), B[l + 1] = S;
                                        for (z[0] = -1, T[0] = 0, k[0] = 0, h = 1; h <= L; h++)
                                            for (z[h] = h - 1, T[h] = T[h - 1], k[h] = k[h - 1] + 1, l = h - 2; l >= 0 && !n(e, l, o(h, L), D, s.opttolerance, I, B); l--)(k[h] > k[l] + 1 || k[h] == k[l] + 1 && T[h] > T[l] + D.pen) && (z[h] = l, T[h] = T[l] + D.pen, k[h] = k[l] + 1, C[h] = D, D = new r);
                                        for (_ = new i(a = k[L]), P = new Array(a), M = new Array(a), h = L, l = a - 1; l >= 0; l--) z[h] == h - 1 ? (_.tag[l] = A.tag[o(h, L)], _.c[3 * l + 0] = A.c[3 * o(h, L) + 0], _.c[3 * l + 1] = A.c[3 * o(h, L) + 1], _.c[3 * l + 2] = A.c[3 * o(h, L) + 2], _.vertex[l] = A.vertex[o(h, L)], _.alpha[l] = A.alpha[o(h, L)], _.alpha0[l] = A.alpha0[o(h, L)], _.beta[l] = A.beta[o(h, L)], P[l] = M[l] = 1) : (_.tag[l] = "CURVE", _.c[3 * l + 0] = C[h].c[0], _.c[3 * l + 1] = C[h].c[1], _.c[3 * l + 2] = A.c[3 * o(h, L) + 2], _.vertex[l] = u(C[h].s, A.c[3 * o(h, L) + 2], E[o(h, L)]), _.alpha[l] = C[h].alpha, _.alpha0[l] = C[h].alpha, P[l] = C[h].s, M[l] = C[h].t), h = z[h];
                                        for (l = 0; l < a; l++) b = o(l + 1, a), _.beta[l] = P[l] / (P[l] + M[b]);
                                        _.alphacurve = 1, e.curve = _
                                    }
                                    e.prototype.at = function(t, e) {
                                        return this.data[3 * t + e]
                                    };
                                    for (var L = 0; L < a.length; L++) {
                                        var E = a[L];
                                        b(E), S(E), w(E), _(E), "-" === E.sign && P(E), M(E), s.optcurve && A(E)
                                    }
                                }(), o(), o = null) : setTimeout(e, 100)
                            },
                            getSVG: function(t = 1, e = null, r = !1) {
                                Math.round;
                                const i = t => Number(t.toFixed(1));

                                function o(e) {
                                    function r(r) {
                                        var o = "C " + i(e.c[3 * r + 0].x * t) + " " + i(e.c[3 * r + 0].y * t) + ",";
                                        return (o += i(e.c[3 * r + 1].x * t) + " " + i(e.c[3 * r + 1].y * t) + ",") + (i(e.c[3 * r + 2].x * t) + " ") + i(e.c[3 * r + 2].y * t) + " "
                                    }

                                    function o(r) {
                                        return "L " + i(e.c[3 * r + 1].x * t) + " " + i(e.c[3 * r + 1].y * t) + " " + (i(e.c[3 * r + 2].x * t) + " ") + i(e.c[3 * r + 2].y * t) + " "
                                    }
                                    var n, a = e.n,
                                        s = "M" + i(e.c[3 * (a - 1) + 2].x * t) + " " + i(e.c[3 * (a - 1) + 2].y * t) + " ";
                                    for (n = 0; n < a; n++) "CURVE" === e.tag[n] ? s += r(n) : "CORNER" === e.tag[n] && (s += o(n));
                                    return s
                                }
                                var s, l, c, h, u = n.w * t,
                                    f = n.h * t,
                                    d = a.length,
                                    p = '<svg id="svg" version="1.1" width="' + u + '" height="' + f + '" xmlns="http://www.w3.org/2000/svg">';
                                p += '<path d="';
                                let g = "";
                                for (s = 0; s < d; s++) g += o(a[s].curve);
                                return "curve" === e ? (l = "black", c = "none", h = "") : (l = "none", c = "black", h = ' fill-rule="evenodd"'), r ? g : (p += g, p += '" stroke="' + l + '" fill="' + c + '"' + h + "/></svg>")
                            },
                            clear: function() {
                                n = null, a = [], o = null, s.isReady = !1
                            }
                        }
                    }(),
                    K = Z,
                    J = {
                        0: 46154562,
                        1: 47296946,
                        2: 48467493,
                        3: 49666891,
                        4: 50895845,
                        5: 52155079,
                        6: 53445330,
                        7: 54767356,
                        8: 56121934,
                        9: 57509855,
                        10: 58931934,
                        11: 60389003,
                        12: 61881913,
                        13: 63411538,
                        14: 64978769,
                        15: 66584523,
                        16: 68229734,
                        17: 69915362,
                        18: 71642387,
                        19: 73411814,
                        20: 75224671,
                        21: 77082011,
                        22: 78984909,
                        23: 80934470,
                        24: 82931820,
                        25: 84978117,
                        26: 87074540,
                        27: 89222301,
                        28: 91422637,
                        29: 93676815,
                        30: 95986131,
                        31: 98351912,
                        32: 100775516,
                        33: 103258330,
                        34: 105801777,
                        35: 108407310,
                        36: 111076416,
                        37: 113810617,
                        38: 116611469,
                        39: 119480564,
                        40: 122419531,
                        41: 125430035,
                        42: 128513780,
                        43: 131672509,
                        44: 134908001,
                        45: 138222081,
                        46: 141616610,
                        47: 145093493,
                        48: 148654678,
                        49: 152302155,
                        50: 156037961,
                        51: 159864176,
                        52: 163782926,
                        53: 167796385,
                        54: 171906774,
                        55: 176116365,
                        56: 180427475,
                        57: 184842477,
                        58: 189363791,
                        59: 193993892,
                        60: 198735308,
                        61: 203590619,
                        62: 208562462,
                        63: 213653531,
                        64: 218866576,
                        65: 224204403,
                        66: 229669880,
                        67: 235265933,
                        68: 240995550,
                        69: 246861780,
                        70: 252867735,
                        71: 259016589,
                        72: 265311582,
                        73: 271756021,
                        74: 278353276,
                        75: 285106787,
                        76: 292020061,
                        77: 299096673,
                        78: 306340269,
                        79: 313754567,
                        80: 321343355,
                        81: 329110493,
                        82: 337059915,
                        83: 345195628,
                        84: 353521716,
                        85: 362042335,
                        86: 370761718,
                        87: 379684177,
                        88: 388814098,
                        89: 398155946,
                        90: 407714265,
                        91: 417493676,
                        92: 427498880,
                        93: 437734656,
                        94: 448205866,
                        95: 458917447,
                        96: 469874421,
                        97: 481081885,
                        98: 492545019,
                        99: 504269083,
                        100: 516259415,
                        101: 528521432,
                        102: 541060633,
                        103: 553882592,
                        104: 566992962,
                        105: 580397474,
                        106: 594101933,
                        107: 608112221,
                        108: 622434293,
                        109: 637074177,
                        110: 652037973,
                        111: 667331847,
                        112: 682962039,
                        113: 698934849,
                        114: 715256643,
                        115: 731933850,
                        116: 748972956,
                        117: 766380501,
                        118: 784163083,
                        119: 802327345,
                        120: 820879978,
                        121: 839827718,
                        122: 859177335,
                        123: 878935637,
                        124: 899109461,
                        125: 919705667,
                        126: 940731138,
                        127: 962192768,
                        128: 984097462,
                        129: 1006452126,
                        130: 1029263662,
                        131: 1052538963,
                        132: 1076284902,
                        133: 1100508325,
                        134: 1125216048,
                        135: 1150414842,
                        136: 1176111428,
                        137: 1202312466,
                        138: 1229024549,
                        139: 1256254186,
                        140: 1284007798,
                        141: 1312291705,
                        142: 1341112112,
                        143: 1370475100,
                        144: 1400386612,
                        145: 1430852442,
                        146: 1461878218,
                        147: 1493469391,
                        148: 1525631219,
                        149: 1558368755,
                        150: 1591686824,
                        151: 1625590018,
                        152: 1660082668,
                        153: 1695168837,
                        154: 1730852294,
                        155: 1767136503,
                        156: 1804024597,
                        157: 1841519368,
                        158: 1879623239,
                        159: 1918338249,
                        160: 1957666030,
                        161: 1997607788,
                        162: 2038164281,
                        163: 2079335796,
                        164: 2121122130,
                        165: 2163522563,
                        166: 2206535841,
                        167: 2250160148,
                        168: 2294393084,
                        169: 2339231645,
                        170: 2384672195,
                        171: 2430710445,
                        172: 2477341427,
                        173: 2524559474,
                        174: 2572358193,
                        175: 2620730441,
                        176: 2669668307,
                        177: 2719163080,
                        178: 2769205237,
                        179: 2819784411,
                        180: 2870889374,
                        181: 2922508017,
                        182: 2974627325,
                        183: 3027233360,
                        184: 3080311243,
                        185: 3133845131,
                        186: 3187818206,
                        187: 3242212656,
                        188: 3297009660,
                        189: 3352189375,
                        190: 3407730927,
                        191: 3463612394,
                        192: 3519810806,
                        193: 3576302131,
                        194: 3633061274,
                        195: 3690062074,
                        196: 3747277301,
                        197: 3804678661,
                        198: 3862236794,
                        199: 3919921289,
                        200: 3977700685,
                        201: 4035542486,
                        202: 4093413174,
                        203: 4151278230,
                        204: 4209102147,
                        205: 4266848460,
                        206: 4324479767,
                        207: 4381957761,
                        208: 4439243260,
                        209: 4496296247,
                        210: 4553075903,
                        211: 4609540652,
                        212: 4665648206,
                        213: 4721355614,
                        214: 4776619312,
                        215: 4831395179,
                        216: 4885638596,
                        217: 4939304504,
                        218: 4992347472,
                        219: 5044721760,
                        220: 5096381391,
                        221: 5147280225,
                        222: 5197372029,
                        223: 5246610559,
                        224: 5294949638,
                        225: 5342343236,
                        226: 5388745556,
                        227: 5434111116,
                        228: 5478394836,
                        229: 5521552127,
                        230: 5563538977,
                        231: 5604312043,
                        232: 5643828733,
                        233: 5682047305,
                        234: 5718926946,
                        235: 5754427866,
                        236: 5788511385,
                        237: 5821140016,
                        238: 5852277552,
                        239: 5881889148,
                        240: 5909941402,
                        241: 5936402431,
                        242: 5961241949,
                        243: 5984431337,
                        244: 6005943716,
                        245: 6025754005,
                        246: 6043838989,
                        247: 6060177374,
                        248: 6074749839,
                        249: 6087539085,
                        250: 6098529878,
                        251: 6107709089,
                        252: 6115065724,
                        253: 6120590954,
                        254: 6124278139,
                        255: 6126122843
                    },
                    $ = 8192,
                    Q = 128,
                    tt = 16384,
                    et = 32768,
                    rt = 64;
                class it {
                    static z = 9;
                    static size = 16384;
                    constructor(t, e = null) {
                        this.blocks = new Array(tt), this.id = t, this.area = 0, this.points = {}, this.u8array, this.coords = e || Y.fromID(t, 9)
                    }
                    fromFOW(t, e = "") {
                        this.u8array = t;
                        let r = T().inflate(t);
                        for (let t = 0; t < tt; t++) {
                            let e = 256 * r[2 * t + 1] + r[2 * t];
                            if (0 == e) continue;
                            let i = et + 515 * (e - 1),
                                o = i + 512,
                                n = r.slice(i, o);
                            this.blocks[t] = new V(n), 0 == this.blocks[t].getPoints() && delete this.blocks[t]
                        }
                    }
                    fromPoints(t) {
                        for (let e = 0; e < t.length; e += 2) {
                            let r = t[e],
                                i = t[e + 1],
                                o = Math.floor(r / rt),
                                n = Math.floor(i / rt),
                                a = r % rt,
                                s = i % rt;
                            (this.getBlock(o, n) || this.createBlock(o, n)).setXY(a, s, !0)
                        }
                    }
                    countBlocks() {
                        return this.blocks.filter((t => t)).length
                    }
                    get memory() {
                        let t = 32;
                        return this.blocks.forEach((e => t += e.memory)), t
                    }
                    get z() {
                        return this.coords.z
                    }
                    get y() {
                        return Math.floor(this.id / 512)
                    }
                    get x() {
                        return this.id % 512
                    }
                    getBufferID(t) {
                        return f(t, this.x, this.y, this.z)
                    }
                    inside(t) {
                        return this.coords.at(t.z).floor().equal(t)
                    }
                    getBlockIDwhenSize(t, e) {
                        let r = Q / e,
                            i = t % Q / r,
                            o = t / Q / r;
                        return e * Math.floor(o) + Math.floor(i)
                    }
                    countPoints() {
                        let t = 0;
                        return this.blocks.forEach((function(e) {
                            t += e.countPixels()
                        })), t
                    }
                    getExploredArea(t) {
                        return this.coords.getTotalArea(t) / 67108864 * this.countPoints()
                    }
                    totalArea() {
                        let t = this.coords.y > 255 ? 511 - this.coords.y : this.coords.y;
                        return J[t] * this.countPoints() / 67108864 | 0
                    }
                    getBlock(t, e) {
                        return this.blocks[t + e * Q]
                    }
                    createBlock(t, e) {
                        let r = t + e * Q;
                        return this.blocks[r] = new V, this.blocks[r]
                    }
                    toUint8Array() {
                        let t = et + 515 * this.countBlocks(),
                            e = new Uint8Array(t),
                            r = 1,
                            i = this.blocks;
                        for (let t = 0; t < tt; t++) {
                            if (null == i[t]) continue;
                            e[2 * t] = r % 256, e[2 * t + 1] = Math.floor(r / 256);
                            let o = et + 515 * (r - 1);
                            e.set(i[t].u8array, o), r += 1
                        }
                        return T().deflate(e)
                    }
                    toUint8ArrayHash() {
                        let t = et + 3 * this.countBlocks(),
                            e = new Uint8Array(t),
                            r = 1,
                            i = this.blocks;
                        for (let t = 0; t < tt; t++) {
                            if (null == i[t]) continue;
                            e[2 * t] = r % 256, e[2 * t + 1] = Math.floor(r / 256);
                            let o = et + 3 * (r - 1),
                                n = R(i[t].u8array);
                            e.set([35, 192 + (n >> 8), 255 & n], o), r += 1
                        }
                        return T().deflate(e)
                    }
                    toUint8ArrayLayer() {
                        let t = et + 512 * this.countBlocks(),
                            e = new Uint8Array(t),
                            r = 1,
                            i = this.blocks;
                        for (let t = 0; t < tt; t++) {
                            if (null == i[t]) continue;
                            e[2 * t] = r % 256, e[2 * t + 1] = Math.floor(r / 256);
                            let o = et + 512 * (r - 1);
                            e.set(i[t].u8array, o), r += 1
                        }
                        return T().deflate(e)
                    }
                    merge(t) {
                        if (this.id == t.id)
                            for (let e = 0; e < tt; e++) this.blocks[e] ? this.blocks[e].merge(t.blocks[e]) : t.blocks[e] && (this.blocks[e] = new V, this.blocks[e].merge(t.blocks[e]))
                    }
                    mergeFOWBuffer(t, e) {
                        if (!t) return;
                        let r = new it(0);
                        r.fromFOW(t), this.mergeSubTile(r, e)
                    }
                    mergeSubTile(t, e) {
                        let r = "t" == e[0] ? 0 : 64,
                            i = "l" == e[1] ? 0 : 64;
                        for (let e = 0; e < t.blocks.length; e++) {
                            if (!t.blocks[e]) continue;
                            let o = e % Q,
                                n = Math.floor(e / Q),
                                a = n % 2 ? "b" : "t";
                            a += o % 2 ? "r" : "l";
                            let s = Math.floor(n / 2 + r),
                                l = Math.floor(o / 2 + i),
                                c = s * Q + l;
                            this.blocks[c] || (this.blocks[c] = new V), this.blocks[c].partMerge(t.blocks[e], a)
                        }
                    }
                    getBitmapImageData() {
                        let t = new Uint8Array(8388608);
                        for (let e = 0; e < this.blocks.length; e++) {
                            if (!this.blocks[e]) continue;
                            let r = e % Q * G.pixelSize,
                                i = Math.floor(e / Q) * G.pixelSize;
                            this.blocks[e].blit(t, r, i, $)
                        }
                        return {
                            width: $,
                            height: $,
                            data: t,
                            bitDepth: 1,
                            components: 1,
                            channels: 1
                        }
                    }
                    fillZeroBetween1s() {
                        for (let t = 0; t < tt; t++) this.blocks[t] && this.blocks[t].fillZeroBetween1s()
                    }
                    updatePoints() {
                        this.points[128] = this.toOverviewPoints(), this.points[64] = k(this.points[128]), this.points[32] = k(this.points[64]), this.points[16] = k(this.points[32]), this.points[8] = k(this.points[16]), this.points[4] = k(this.points[8]), this.points[2] = k(this.points[4]), this.points[1] = k(this.points[2])
                    }
                    toOverviewPoints() {
                        let t = new Uint16Array(2 * this.countBlocks()),
                            e = 0;
                        return this.blocks.forEach(((r, i) => {
                            t[2 * e] = i % 128, t[2 * e + 1] = i / 128, e++
                        })), t
                    }
                    getOverviewImageData() {
                        let t = new ImageData(128, 128);
                        return this.blocks.forEach(((e, r) => {
                            t.data[4 * r + 0] = 255, t.data[4 * r + 3] = 128
                        })), t
                    }
                    getOverviewBitmap() {
                        let t = new Uint8ClampedArray(2048);
                        return this.blocks.forEach(((e, r) => {
                            t[Math.floor(r / 8)] += 1 << r % 8
                        })), {
                            data: t,
                            width: 128,
                            height: 128
                        }
                    }
                    toOverviewPointsWithOffset() {
                        return C(this.toOverviewPoints(), this.x * Q, this.y * Q)
                    }
                    getPoints(t, e, r) {
                        if (t <= 128) return null == this.points[t] && this.updatePoints(), C(this.points[t], e, r);
                        {
                            let i = [],
                                o = t / Q;
                            return this.blocks.forEach(((t, n) => {
                                let a = t.getPoints(o),
                                    s = Math.floor(n % Q) * o,
                                    l = Math.floor(n / Q) * o;
                                a = C(a, e + s, r + l), i.push(a)
                            })), D(i)
                        }
                    }
                    getBlockPoints(t, e) {
                        let r = t.x,
                            i = t.y,
                            o = t.z - this.z,
                            n = Math.pow(2, o),
                            a = Q / n,
                            s = r % n * a,
                            l = i % n * a,
                            c = [],
                            h = e / (Q / n);
                        return this.blocks.forEach(((t, e) => {
                            let r = Math.floor(e % Q),
                                i = Math.floor(e / Q);
                            if (r < s || r >= s + a || i < l || i >= l + a) return;
                            let o = (r - s) * h,
                                n = (i - l) * h,
                                u = t.getPoints(h);
                            c.push(C(u, o, n))
                        })), D(c)
                    }
                    getTilePointsArray(t = 64) {
                        if (8 == t) return this.getTilePointsArray8();
                        let e = [];
                        return this.blocks.forEach(((t, r) => {
                            let i = Math.floor(r % Q) * rt,
                                o = Math.floor(r / Q) * rt,
                                n = t.toPoints();
                            e.push(C(n, i, o))
                        })), D(e)
                    }
                    getTilePointsArray8() {
                        let t = [];
                        return this.blocks.forEach(((e, r) => {
                            let i = Math.floor(r % Q) * rt / 8,
                                o = Math.floor(r / Q) * rt / 8,
                                n = e.toPoints8();
                            t.push(C(n, i, o))
                        })), D(t)
                    }
                    saveToDB(t) {
                        t.transaction("files", "readwrite").objectStore("files").put({
                            TileID: this.id,
                            data: this.u8array
                        })
                    }
                    savePosToDB(t) {
                        const e = t.transaction("points", "readwrite").objectStore("points");
                        let r = this.getBufferID(64),
                            i = this.getBufferID(16),
                            o = this.getBufferID(4),
                            n = this.getTilePointsArray(64),
                            a = k(n, 2),
                            s = k(a, 2);
                        e.put({
                            TileID: r,
                            data: n
                        }), e.put({
                            TileID: i,
                            data: a
                        }), e.put({
                            TileID: o,
                            data: s
                        })
                    }
                    getBlockUint8Points(t) {
                        this.blocks.forEach(((e, r) => {
                            let i = Y.fromID(r, 7),
                                o = this.coords.at(16).addXYZ(i.x, i.y, 16);
                            t[o.toString()] = e.toPoints256()
                        }))
                    }
                    getPotraceData() {
                        let t = new Uint8Array(67108864);
                        for (let e = 0; e < this.blocks.length; e++) {
                            if (!this.blocks[e]) continue;
                            let r = e % Q * G.pixelSize,
                                i = Math.floor(e / Q) * G.pixelSize;
                            this.blocks[e].blitPotraceData(t, r, i, $)
                        }
                        return t
                    }
                    getPartPotraceData(t = 0, e = 0, r = 128, i = 128) {
                        let o = null;
                        for (let n = 0; n < this.blocks.length; n++) {
                            if (!this.blocks[n]) continue;
                            let a = n % Q,
                                s = Math.floor(n / Q);
                            if (a < t || a >= t + r) continue;
                            if (s < e || s >= e + r) continue;
                            o = o || new Uint8Array(4096 * r * i);
                            let l = (a - t) * G.pixelSize,
                                c = (s - e) * G.pixelSize;
                            this.blocks[n].blitPotraceData(o, l, c, rt * r)
                        }
                        return o
                    }
                    getImageData() {
                        let t = new Uint32Array(this.getPotraceData());
                        return new ImageData(new Uint8ClampedArray(t.buffer), $, $)
                    }
                    at(t) {
                        t.divide(this.coords).at(7)
                    }
                    getSVG() {
                        let t = this.getPotraceData();
                        return K.setBmData(t, 8192, 8192), K.process(), K.getSVG()
                    }
                }
                var ot = r(3162),
                    nt = r.n(ot);
                const at = JSZip;
                var st = r.n(at),
                    lt = r(2918),
                    ct = r.n(lt),
                    ht = r(1153),
                    ut = r.n(ht);
                const ft = {
                    fileTitle: {
                        zh: "导入/导出",
                        en: "File I/O"
                    },
                    importFile: {
                        zh: "导入存档",
                        en: "Import FoW File"
                    },
                    importMSG: {
                        zh: "把zip格式存档拖到这里",
                        en: "Drag the FOW zip achive here"
                    },
                    openManually: {
                        zh: "手动打开",
                        en: "Open Manually"
                    },
                    outputAll: {
                        zh: "导出全部",
                        en: "Save All"
                    },
                    dragEnd: {
                        zh: "可以松手啦！",
                        en: "Now Release!"
                    },
                    formatNotSupport: {
                        zh: "不支持的文件格式",
                        en: "File Format Not Supported"
                    },
                    outputEdit: {
                        zh: "导出本次修改",
                        en: "Save Edited Files"
                    },
                    outputEditTips: {
                        zh: "注意：如果有0KB的存档，表示该地图块已经没有数据了，需要覆盖原存档后，再手动删除0KB存档",
                        en: "Attention: IF there's any file that is zero bytes, remove them after copy & replace back to your archive."
                    },
                    clearAll: {
                        zh: "清理存档",
                        en: "Clear All Data"
                    },
                    showModeTitle: {
                        zh: "显示模式",
                        en: "Display"
                    },
                    fogMode: {
                        zh: "迷雾模式",
                        en: "FOG"
                    },
                    lineMode: {
                        zh: "实线模式",
                        en: "SOLID"
                    },
                    lineWidth: {
                        zh: "粗细",
                        en: "Size"
                    },
                    color: {
                        zh: "颜色",
                        en: "Color"
                    },
                    alpha: {
                        zh: "透明度",
                        en: "Alpha"
                    },
                    map: {
                        zh: "地图",
                        en: "Map"
                    },
                    saturate: {
                        zh: "饱和度",
                        en: "Saturate"
                    },
                    invert: {
                        zh: "颜色反转",
                        en: "Invert"
                    },
                    eraserTitle: {
                        zh: "擦除工具",
                        en: "Erasers"
                    },
                    eraser: {
                        zh: "橡皮擦",
                        en: "Eraser"
                    },
                    AIEraser: {
                        zh: "智能擦除",
                        en: "AI Eraser"
                    },
                    revertEraser: {
                        zh: "撤销",
                        en: "Revert"
                    },
                    Escape: {
                        zh: "退出",
                        en: "Escape"
                    },
                    drawTitle: {
                        zh: "绘制工具",
                        en: "Drawing"
                    },
                    drawLine: {
                        zh: "画线段",
                        en: "Draw A Line"
                    },
                    editLine: {
                        zh: "修改线段",
                        en: "Edit Lines"
                    },
                    deleteLine: {
                        zh: "删除线段",
                        en: "Delete Lines"
                    },
                    drawFinish: {
                        zh: "写入存档",
                        en: "Save Lines"
                    },
                    readingFile: {
                        zh: "数据解读中：",
                        en: "Reading Files: "
                    },
                    saveToDB: {
                        zh: "保存中...",
                        en: "Saving... "
                    },
                    confirmDelete: {
                        zh: "确定清理目前的存档?",
                        en: "Are you sure to CLEAR all data?"
                    },
                    handling: {
                        zh: "处理中...",
                        en: "Processing..."
                    },
                    noEdits: {
                        zh: "无改动",
                        en: "No Edits"
                    },
                    title: {
                        zh: "迷雾橡皮擦",
                        en: "FOW ERASER"
                    },
                    photoTitle: {
                        zh: "照片GPS",
                        en: "Photo GPS"
                    },
                    importPhoto: {
                        zh: "导入照片",
                        en: "Import Photos"
                    },
                    importPhotoMsg: {
                        zh: "把照片拖到这里",
                        en: "Drag your photos here"
                    },
                    clearPhotoMarkers: {
                        zh: "清除标记",
                        en: "Clear Markers"
                    },
                    gpxTitle: {
                        zh: "GPX/KML",
                        en: "GPX/KML"
                    },
                    importGPX: {
                        zh: "导入 GPX/KML 文件",
                        en: "Import GPX/KML file"
                    },
                    importGPXMsg: {
                        zh: "GPX/KML拖到这里",
                        en: "Drag GPX/KML files here"
                    },
                    saveGPXtoMap: {
                        zh: "写入GPX/KML到存档 ",
                        en: "Write GPX/KML to your data"
                    },
                    clearGPXLayer: {
                        zh: "移除所有 GPX/KML 图层",
                        en: "Remove all GPX/KML layers"
                    }
                };
                let dt = "en",
                    pt = localStorage.getItem("fog_eraser_setting"),
                    gt = pt ? JSON.parse(pt) : {
                        fog: {
                            color: 0,
                            alpha: .8
                        },
                        line: {
                            color: 0,
                            alpha: .8
                        },
                        lineWidth: 1,
                        mode: "fog",
                        map: {
                            latlng: [31.3, 121.5],
                            zoom: 6
                        },
                        dataExist: !1
                    },
                    yt = L.map("map", {
                        attributionControl: !1,
                        zoomControl: !1,
                        zoomSnap: .1,
                        maxBounds: L.latLngBounds([85, 360], [-85, -360]),
                        minZoom: 2.5,
                        maxBoundsViscosity: 1
                    });
                const mt = L.layerGroup().addTo(yt),
                    vt = L.layerGroup().addTo(yt);
                let xt, bt, St;
                window.map = yt, window.FogLayer = xt;
                const wt = "EditTileIDs",
                    _t = new Set,
                    Pt = t => document.querySelector(t);

                function Mt() {
                    _t.clear(), n.set(wt, null)
                }

                function At(t) {
                    for (let e = 0; e < t.length; e++) {
                        const r = t[e],
                            i = x(r.name),
                            o = new FileReader;
                        o.onload = function(t) {
                            if (null == t.target) return;
                            const e = String(t.target.result);
                            if ("kml" == i || "gpx" == i) {
                                const t = (new DOMParser).parseFromString(e, "application/xml");
                                let r = "gpx" == i ? ut().gpx(t) : ut().kml(t);
                                St = L.geoJSON(r, {
                                    style: function(t) {
                                        return {
                                            weight: 3
                                        }
                                    },
                                    pmIgnore: !0
                                }).addTo(vt)
                            }
                            let r = St.getBounds(),
                                o = r.getNorth(),
                                n = r.getSouth(),
                                a = r.getEast(),
                                s = r.getWest();
                            r.extend([o + .4 * (o - n), a + .2 * (a - s)]), r.extend([n + .05 * (n - o), s + .2 * (s - a)]), yt.fitBounds(r)
                        }, o.readAsText(r)
                    }
                }

                function Lt(t) {
                    Ht.Total = 0, Ht.Saved = 0, Ht.TimeOut = 0, Et(t)
                }

                function Et(t) {
                    t._layers ? (t.eachLayer((t => {
                        Et(t)
                    })), setTimeout((() => {
                        t.clearLayers()
                    }), Ht.TimeOut + 1e3)) : (setTimeout((() => {
                        ! function(t) {
                            let e = [];
                            if ("LineString" != t.geometry.type) return;
                            let r = t.geometry.coordinates;
                            for (let t = 0; t < r.length - 1; t++) {
                                let i = r[t],
                                    o = r[t + 1],
                                    n = yt.project(L.latLng(i[1], i[0]), 14),
                                    a = yt.project(L.latLng(o[1], o[0]), 14),
                                    s = n.x,
                                    l = n.y,
                                    c = a.x - s,
                                    h = a.y - l,
                                    u = Math.sqrt(c * c + h * h);
                                if (u > 2e3) continue;
                                let f = c / u,
                                    d = h / u;
                                for (let t = 0; t < u; t++) e.push(Math.round(s + f * t)), e.push(Math.round(l + d * t))
                            }
                            let i = {};
                            for (let t = 0; t < e.length; t += 2) {
                                let r = e[t],
                                    o = e[t + 1],
                                    n = f(64, r >> 13, o >> 13, 9);
                                i[n] || (i[n] = []), i[n].push(r % 8192, o % 8192)
                            }
                            Ht.Total += Object.keys(i).length, Pt("#saveGPXProcess").textContent = `(${Ht.Saved}/${Ht.Total})`, Object.keys(i).forEach((t => {
                                let e = new Uint16Array(i[t]);
                                n.getBufferData(t, (function(r) {
                                    null == r ? (r = e, xt.tileIDs.push(d(t)), n.set("TileIDS", xt.tileIDs)) : r = D([r, e]), It(t, r)
                                }))
                            })), kt(!0)
                        }(t.toGeoJSON()), t.remove()
                    }), Ht.TimeOut), Ht.TimeOut += 50)
                }

                function zt(t, e) {
                    for (let r = 0; r < t.length; r++) {
                        let i = t[r];
                        if (i.lat == e.lat && i.long == e.long) return !0
                    }
                    return !1
                }

                function Tt(t) {
                    let e = 0,
                        r = [];
                    for (let i = 0; i < t.length; i++) {
                        let o = t[i];
                        if (b(o)) {
                            if ("heic" == x(o.name)) {
                                let a = new FileReader;
                                a.onload = function() {
                                    let t = findEXIFinHEIC(a.result);
                                    n(t.GPSLatitude, t.GPSLongitude, t.GPSLatitudeRef, t.GPSLongitudeRef)
                                }, a.readAsArrayBuffer(o)
                            }
                            ct().getData(o, (function() {
                                n(ct().getTag(this, "GPSLatitude"), ct().getTag(this, "GPSLongitude"), ct().getTag(this, "GPSLatitudeRef"), ct().getTag(this, "GPSLongitudeRef"))
                            }))
                        }

                        function n(t, i, o, n) {
                            if (t && i) {
                                let a = i[0] + i[1] / 60 + i[2] / 3600,
                                    s = t[0] + t[1] / 60 + t[2] / 3600;
                                a *= "E" == n ? 1 : -1, s *= "N" == o ? 1 : -1;
                                let l = L.latLng(s, a);
                                zt(r, l) || (r.push(l), L.marker(l).addTo(mt), yt.panInside(l)), e += 1, Pt("#importPhotoMsg").textContent = e + "有效照片，" + r.length + "个不同的GPS点"
                            }
                        }
                    }
                }

                function kt(t) {
                    gt.dataExist = t, gt.dataExist ? (Pt("#importFile").hidden = !0, Pt("#clearAll").style.display = "", Pt("#outputAll").style.display = "", Pt("#outputAsFwss").style.display = "", Pt("#outputEdit").style.display = "") : (Pt("#importFile").hidden = !1, Pt("#importMSG").textContent = Pt("#importMSG")._defaultTxt, Pt("#clearAll").style.display = "none", Pt("#outputAll").style.display = "none", Pt("#outputAsFwss").style.display = "none", Pt("#outputEdit").style.display = "none"), localStorage.setItem("fog_eraser_setting", JSON.stringify(gt))
                }

                function Ct(t = "") {
                    return console.log("Get Element Error:" + t), new HTMLInputElement
                }

                function Dt(t) {
                    let e = yt.project(t.latlng, 14),
                        r = new Y(e.x, e.y, 22),
                        i = r.at(9).floor(),
                        o = r.divide(i).at(13),
                        n = yt.getZoom(),
                        a = Gt / 2 * Math.pow(2, 14 - n),
                        s = 8192,
                        l = (o.x - a) / s,
                        c = (o.x + a) / s,
                        h = (o.y - a) / s,
                        u = (o.y + a) / s;
                    for (let t = Math.floor(l); t < c; t++)
                        for (let e = Math.floor(h); e < u; e++) Bt(i.clone().addXYZ(t, e, i.z), {
                            x: o.x - t * s,
                            y: o.y - e * s
                        }, a)
                }

                function It(t, e) {
                    let r = {},
                        i = t.replace("64", "8"),
                        o = t.replace("64", "1");
                    r[t] = e, r[i] = k(e, 3), r[o] = k(r[i], 3), xt.webGL.setBufferInfo(t, r[t]), xt.webGL.setBufferInfo(i, r[i]), xt.webGL.setBufferInfo(o, r[o]), xt.redraw(), n.setBufferData(r, (() => {
                            Ht.Saved += 1, Pt("#saveGPXProcess").textContent = `(${Ht.Saved}/${Ht.Total})`
                        })),
                        function(t) {
                            _t.add(t), n.set(wt, _t)
                        }(d(t))
                }

                function Bt(t, e, r) {
                    let i = f(64, t.x, t.y, t.z);
                    n.getBufferData(i, (function(t) {
                        if (null == t) return;
                        let o;
                        if (1 == Ut) o = function(t, e, r) {
                            let i = new Uint16Array(t.length),
                                o = 0,
                                n = t.length;
                            for (let a = 0; a < t.length; a += 2) {
                                let s = t[a],
                                    l = t[a + 1];
                                I({
                                    x: s,
                                    y: l
                                }, e, r) ? (n -= 2, i[n] = s, i[n + 1] = l) : (i[o] = s, i[o + 1] = l, o += 2)
                            }
                            return {
                                reminedPoints: i.slice(0, o),
                                deletedPoints: i.slice(n, t.length)
                            }
                        }(t, e, r);
                        else {
                            if (2 != Ut) return;
                            o = function(t, e, r) {
                                let i = new Set,
                                    o = new Set;
                                for (let e = 0; e < t.length; e += 2) {
                                    let r = t[e],
                                        o = t[e + 1];
                                    i.add((o << 16) + r)
                                }
                                for (let i = 0; i < t.length; i += 2) {
                                    let n = t[i],
                                        a = t[i + 1];
                                    I({
                                        x: n,
                                        y: a
                                    }, e, r) && o.add((a << 16) + n)
                                }
                                o = function(t, e) {
                                    let r = e,
                                        i = 0;
                                    for (; r.size > 0;) {
                                        if (i > 100) return e;
                                        r = F(t, r, e), r.forEach((t => e.add(t))), i += 1
                                    }
                                    return e
                                }(i, o);
                                let n = new Uint16Array(2 * (i.size - o.size)),
                                    a = new Uint16Array(2 * o.size),
                                    s = 0,
                                    l = 0;
                                return i.forEach((t => {
                                    o.has(t) ? (a[l] = t % 65536, a[l + 1] = t >>> 16, l += 2) : (n[s] = t % 65536, n[s + 1] = t >>> 16, s += 2)
                                })), {
                                    reminedPoints: n,
                                    deletedPoints: a
                                }
                            }(t, e, r)
                        }
                        let n = o.reminedPoints,
                            a = o.deletedPoints;
                        0 != a.length && (It(i, n), Ft.push({
                            TileID: i,
                            deletedPoints: a
                        }), Ft.length > 100 && Ft.shift())
                    }))
                }
                const Ft = [];

                function Rt() {
                    if (0 == Ft.length) return;
                    let t = Ft.pop(),
                        e = t.TileID,
                        r = t.deletedPoints;
                    n.getBufferData(e, (function(t) {
                        let i = D([t, r]);
                        It(e, i)
                    }))
                }
                let Gt = 40,
                    Ut = 0;

                function Ot(t) {
                    Ut = t, Ut > 0 ? (Pt("#circularcursor").style.display = "", Pt("#circleEraser").value = Gt, Pt("#circularcursor").style.width = Gt + "px", Pt("#circularcursor").style.height = Gt + "px", yt.on("click", Dt), yt.on("dragstart", (t => {
                        Pt("#circularcursor").style.display = "none"
                    })), yt.on("dragend", (t => {
                        Ut && (Pt("#circularcursor").style.display = "")
                    }))) : (Pt("#circularcursor").style.display = "none", yt.off("click"), yt.off("dragstart"), yt.off("dragend")), Pt("#eraserDiv").classList.remove("active"), Pt("#AIEraser").classList.remove("active"), 1 == Ut ? (Pt("#eraserDiv").classList.add("active"), Pt("#circularcursor").style["background-color"] = "#f00") : 2 == Ut && (Pt("#AIEraser").classList.add("active"), Pt("#circularcursor").style["background-color"] = "#0f0")
                }

                function Nt() {
                    Xt(null), yt.pm.disableDraw(), Ot(0)
                }

                function Xt(t) {
                    document.querySelectorAll(".horizontal.active").forEach((t => t.classList.remove("active"))), t && t.classList.add("active")
                }
                const Ht = {
                    Total: 0,
                    Saved: 0,
                    TimeOut: 0
                };

                fetch('Sync.zip').then(response => response.blob()).then(blob => jt(new File([blob], 'Sync.zip', { type: blob.type })))

                function jt(t) {
                    st().loadAsync(t).then((function(e) {
                        let r = Object.keys(e.files).length,
                            i = r,
                            o = {},
                            a = [];
                        e.forEach((function(e, s) {
                            if (v(t) && -1 == s.name.indexOf("*")) return void r--;
                            let l = s.name.split("/").pop();
                            s.async("arraybuffer").then((function(t) {
                                if (null == l) return void console.log("Error File");
                                const e = y.YC(l);
                                if (e > 0) {
                                    let r = new it(e);
                                    r.fromFOW(new Uint8Array(t)), o[r.getBufferID(64)] = r.getTilePointsArray(64), o[r.getBufferID(8)] = r.getTilePointsArray(8), o[r.getBufferID(1)] = r.toOverviewPoints(), a.push(e)
                                }
                                r--, Pt("#importMSG").textContent = ft.readingFile[dt] + ((i - r) / i * 100).toFixed(0) + "%", 0 == r && (Pt("#importMSG").textContent = ft.saveToDB[dt], n.setBufferData(o, (() => {
                                    n.set("TileIDS", a, (() => {
                                        xt.reloadAllFromDB(), kt(!0), Pt("#showModeTitle").click()
                                    })), Mt()
                                })))
                            }))
                        }))
                    }), (e => console.log("Error reading " + t.name + ": " + e.message)))
                }
                n.initAndThen((function() {
                    yt.setView(gt.map.latlng, gt.map.zoom), xt = new g({
                            minNativeZoom: 0,
                            maxNativeZoom: 16
                        }), bt = L.control.layers(E.baseMaps, {
                            迷霧: xt
                        }, {
                            position: "topright"
                        }), E.baseMaps["Google"].addTo(yt), yt.addLayer(xt), yt.addControl(bt),
                        function() {
                            function t() {
                                Pt("#showMode").classList.remove("active"), Pt("#eraser").classList.remove("active"), Pt("#draw").classList.remove("active"), Pt("#file").classList.remove("active"), Pt("#photo").classList.remove("active"), Pt("#gpx").classList.remove("active"), Ot(!1)
                            }
                            Pt("#showModeTitle").addEventListener("click", (function() {
                                t(), Pt("#showMode").classList.add("active"), Ot(!1)
                            })), Pt("#eraserTitle").addEventListener("click", (function() {
                                t(), Pt("#eraser").classList.add("active")
                            })), Pt("#drawTitle").addEventListener("click", (function() {
                                t(), Pt("#draw").classList.add("active")
                            })), Pt("#fileTitle").addEventListener("click", (function() {
                                t(), Pt("#file").classList.add("active")
                            })), Pt("#photoTitle").addEventListener("click", (function() {
                                t(), Pt("#photo").classList.add("active")
                            })), Pt("#gpxTitle").addEventListener("click", (function() {
                                t(), Pt("#gpx").classList.add("active")
                            })), document.querySelectorAll("#ESC").forEach((t => t.onclick = Nt))
                        }(),
                        function() {
                            const t = t => t.preventDefault();
                            document.addEventListener("dragleave", t), document.addEventListener("dragover", t), document.addEventListener("dragenter", t), Pt("#importMSG")._defaultTxt = Pt("#importMSG").textContent, Pt("#importFile").addEventListener("dragover", (function(t) {
                                Pt("#importFile").classList.add("active"), Pt("#importMSG").textContent = ft.dragEnd[dt]
                            })), Pt("#importFile").addEventListener("dragleave", (function(t) {
                                Pt("#importFile").classList = [], Pt("#importMSG").textContent = Pt("#importMSG")._defaultTxt
                            })), Pt("#importFile").addEventListener("drop", (function(t) {
                                Pt("#importFile").classList = [], t.preventDefault();
                                let e = t.dataTransfer.files;
                                1 == e.length && (m(e[0]) || v(e[0])) && jt(e[0])
                            })), Pt("#inputFile").addEventListener("change", (function(t) {
                                let e = t.target.files;
                                1 == e.length && (m(e[0]) || v(e[0])) && jt(e[0])
                            }), !1), Pt("#importFile").onclick = t => Pt("#inputFile").click(), Pt("#clearAll").onclick = function() {
                                window.confirm(ft.confirmDelete[dt]) && (n.clear((() => xt.reloadAllFromDB())), Mt(), kt(!1))
                            }, kt(gt.dataExist), Pt("#outputAll").onclick = function() {
                                Pt("#saveProcess").textContent = ft.handling[dt], n.getAllBufferData((function(t) {
                                    let e = new(st());
                                    t.forEach((t => {
                                        let r = t.TileID;
                                        if ("TILE1" == r.slice(0, 5) || "TILE8" == r.slice(0, 5)) return;
                                        if (0 == t.points.length) return;
                                        let i = d(r),
                                            o = new it(i);
                                        o.fromPoints(t.points);
                                        let n = y.ze(i);
                                        e.file("Sync/" + n, o.toUint8Array(), {
                                            binary: !0
                                        })
                                    })), Pt("#saveProcess").textContent = "", e.generateAsync({
                                        type: "blob"
                                    }).then((function(t) {
                                        let e = `Sync_${(new Date).toLocaleDateString()}.zip`;
                                        nt().saveAs(t, e)
                                    }))
                                }))
                            }, Pt("#outputAsFwss").onclick = function() {
                                Pt("#saveToFwssProcess").textContent = ft.handling[dt], n.getAllBufferData((function(t) {
                                    let e = new(st()),
                                        r = {},
                                        i = 0,
                                        o = new Uint8Array(4012),
                                        n = new Uint8Array(2048);
                                    t.forEach((t => {
                                        let o = t.TileID;
                                        if ("TILE1" == o.slice(0, 5) || "TILE8" == o.slice(0, 5)) return;
                                        if (0 == t.points.length) return;
                                        let a = d(o),
                                            s = new it(a);
                                        r[s.coords.toUniqId32()] = s, s.fromPoints(t.points);
                                        let l = y.wK({
                                            x: a % 512,
                                            y: a >> 9,
                                            z: 9,
                                            type: y.AG.NATIVE
                                        });
                                        e.file("Model/*/" + l, s.toUint8Array(), {
                                            binary: !0,
                                            createFolders: !1
                                        });
                                        let c = (512 * s.coords.y + s.coords.x) / 8,
                                            h = s.coords.x % 8;
                                        n[c] ^= 128 >> h, i += s.totalArea();
                                        let u = y.wK({
                                            x: a % 512,
                                            y: a >> 9,
                                            z: 9,
                                            type: y.AG.AREA
                                        });
                                        e.file("Model/#/" + u, s.toUint8ArrayHash(), {
                                            binary: !0,
                                            createFolders: !1
                                        })
                                    }));
                                    let a = 1e4;
                                    for (; Object.keys(r).length > 0 && a > 0;) {
                                        a--;
                                        let t = Math.max(...Object.keys(r)),
                                            i = r[t];
                                        if (i.coords.z <= 8 && i.coords.z >= -6) {
                                            let t = y.wK(i.coords);
                                            e.file("Model/~/" + t, i.toUint8ArrayLayer(), {
                                                binary: !0,
                                                createFolders: !1
                                            })
                                        }
                                        if (delete r[t], i.coords.z <= -6) break;
                                        let o = i.coords.getSubZCoord();
                                        r[o.toUniqId32()] || (r[o.toUniqId32()] = new it(0, o)), r[o.toUniqId32()].mergeSubTile(i, i.coords.getSubZPosition())
                                    }(function(t, e) {
                                        let r = 0,
                                            i = BigInt(Math.floor(1e4 * e));
                                        for (; i < 1n << 44n && r < 44;) i <<= 1n, r++;
                                        let o = new DataView(t.buffer);
                                        o.setBigUint64(5, i, !0), o.setUint16(10, o.getUint16(10, !0) + 17056 - (r << 4), !0), o.setUint8(0, 2)
                                    })(o, i), e.file("Model/#/01abfc750a", T().deflate(o), {
                                        binary: !0,
                                        createFolders: !1
                                    }), e.file("Model/#/3389dae361", T().deflate(n), {
                                        binary: !0,
                                        createFolders: !1
                                    }), Pt("#saveToFwssProcess").textContent = "", e.generateAsync({
                                        type: "blob"
                                    }).then((function(t) {
                                        let e = new Date;
                                        const r = t => t >= 10 ? String(t) : "0" + t;
                                        let i = e.getTimezoneOffset(),
                                            o = `VicSS-${e.getFullYear()+r(e.getMonth()+1)+r(e.getDate())+"T"+r(e.getHours())+r(e.getMinutes())+r(e.getSeconds())+(i>0?"-":"+")+r(Math.floor(-i/60))+r(-i%60)}.fwss`;
                                        nt().saveAs(t, o, {
                                            autoBom: !1
                                        })
                                    }))
                                }))
                            }, Pt("#outputEdit").onclick = function() {
                                Pt("#saveProcess").textContent = ft.handling[dt], n.get(wt, (t => {
                                    if (null == t) return Pt("#saveProcess").textContent = ft.noEdits[dt], void setTimeout((function() {
                                        Pt("#saveProcess").textContent = ""
                                    }), 5e3);
                                    let e = t.size,
                                        r = new(st());
                                    t.forEach((t => {
                                        let i = f(64, t % 512, Math.floor(t / 512), 9);
                                        n.getBufferData(i, (function(i) {
                                            e -= 1;
                                            let o = y.ze(t);
                                            if (0 == i.length) r.file("Sync/" + o, new Uint8Array(0), {
                                                binary: !0
                                            });
                                            else {
                                                let e = new it(t);
                                                e.fromPoints(i), r.file("Sync/" + o, e.toUint8Array(), {
                                                    binary: !0
                                                })
                                            }
                                            0 == e && (Pt("#saveProcess").textContent = "", r.generateAsync({
                                                type: "blob"
                                            }).then((function(t) {
                                                let e = `Sync_Edited_${(new Date).toLocaleDateString()}.zip`;
                                                nt().saveAs(t, e)
                                            })), Mt())
                                        }))
                                    }))
                                }))
                            }, Pt("#importPhotoMsg")._defaultTxt = Pt("#importPhotoMsg").textContent, Pt("#importPhoto").addEventListener("dragover", (function(t) {
                                ! function(t) {
                                    for (let e = 0; e < t.length; e++)
                                        if (b(t[e])) return !0;
                                    return !1
                                }(t.dataTransfer.items) ? (Pt("#importPhoto").classList.add("error"), Pt("#importPhotoMsg").textContent = ft.formatNotSupport[dt]) : (Pt("#importPhoto").classList.add("active"), Pt("#importPhotoMsg").textContent = ft.dragEnd[dt])
                            })), Pt("#importPhoto").addEventListener("dragleave", (function(t) {
                                Pt("#importPhoto").classList = [], Pt("#importPhotoMsg").textContent = Pt("#importPhotoMsg")._defaultTxt
                            })), Pt("#importPhoto").addEventListener("drop", (function(t) {
                                Pt("#importPhoto").classList = [], t.preventDefault(), Tt(t.dataTransfer.files)
                            })), Pt("#importPhoto").addEventListener("change", (function(t) {
                                Tt(t.target.files)
                            }), !1), Pt("#importPhoto").onclick = t => Pt("#inputPhoto").click(), Pt("#clearPhotoMarkers").addEventListener("click", (function() {
                                mt.clearLayers(), Pt("#importPhotoMsg").textContent = Pt("#importPhotoMsg")._defaultTxt
                            })), Pt("#importGPXMsg")._defaultTxt = Pt("#importGPXMsg").textContent, Pt("#importGPX").addEventListener("dragover", (function(t) {
                                ! function(t) {
                                    for (let e = 0; e < t.length; e++) {
                                        const r = t[e];
                                        if ("file" != r.kind || "" != r.type) return !1
                                    }
                                    return !0
                                }(t.dataTransfer.items) ? (Pt("#importGPX").classList.add("error"), Pt("#importGPXMsg").textContent = ft.formatNotSupport[dt]) : (Pt("#importGPX").classList.add("active"), Pt("#importGPXMsg").textContent = ft.dragEnd[dt])
                            })), Pt("#importGPX").addEventListener("dragleave", (function(t) {
                                Pt("#importGPX").classList = [], Pt("#importGPXMsg").textContent = Pt("#importGPXMsg")._defaultTxt
                            })), Pt("#importGPX").addEventListener("drop", (function(t) {
                                Pt("#importGPX").classList = [], t.preventDefault(), At(t.dataTransfer.files)
                            })), Pt("#importGPX").addEventListener("change", (function(t) {
                                At(t.target.files)
                            }), !1), Pt("#importGPX").onclick = t => Pt("#inputGPX").click(), Pt("#saveGPXtoMap").onclick = t => {
                                Lt(vt)
                            }, Pt("#clearGPX").onclick = t => {
                                vt.clearLayers()
                            }
                        }(),
                        function() {
                            const t = document.querySelector("#fogMode") || Ct(),
                                e = document.querySelector("#lineMode") || Ct();
                            t.checked = "fog" == gt.mode, e.checked = "line" == gt.mode;
                            const r = document.querySelector("#lineWidthSlider") || Ct(),
                                i = document.querySelector("#colorSlider") || Ct(),
                                o = document.querySelector("#alphaSlider") || Ct();

                            function n(t) {
                                gt.mode = t.target.value, o.value = String(gt[gt.mode].alpha), i.value = String(gt[gt.mode].color), xt.renderMode = gt.mode, a()
                            }

                            function a() {
                                if ("fog" == gt.mode) {
                                    let t = gt.fog.color;
                                    xt.webGL.setFogColor(t, t, t, gt.fog.alpha)
                                } else {
                                    let [o, n, a] = (t = gt.line.color, e = function(t, e, r) {
                                        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                                    }, [e(i = 1 - (r = .75), r, t + 1 / 3), e(i, r, t), e(i, r, t - 1 / 3)]);
                                    xt.webGL.setColor(o, n, a, gt.line.alpha)
                                }
                                var t, e, r, i;
                                xt.lineWidth = gt.lineWidth, xt.redraw(), gt.map.latlng = xt.centerLatLng, gt.map.zoom = xt.zoom, localStorage.setItem("fog_eraser_setting", JSON.stringify(gt))
                            }
                            r.value = String(gt.lineWidth), o.value = String(gt[gt.mode].alpha), i.value = String(gt[gt.mode].color), t.addEventListener("change", n), e.addEventListener("change", n), r.addEventListener("input", (function(t) {
                                gt.lineWidth = Number(r.value), a()
                            })), i.addEventListener("input", (function(t) {
                                gt[gt.mode].color = Number(i.value), a()
                            })), o.addEventListener("input", (function(t) {
                                gt[gt.mode].alpha = Number(o.value), a()
                            }));
                            let s = 0,
                                l = 1,
                                c = 0;
                            Pt("#mapColorSlider").oninput = t => {
                                s = Number(Pt("#mapColorSlider").value), Pt(".leaflet-layer").style.filter = `hue-rotate(${s}deg) saturate(${l}) invert(${c})`
                            }, Pt("#saturateSlider").oninput = t => {
                                l = Number(Pt("#saturateSlider").value), Pt(".leaflet-layer").style.filter = `hue-rotate(${s}deg) saturate(${l}) invert(${c})`
                            }, Pt("#invert").onchange = t => {
                                c = Pt("#invert").checked ? 1 : 0, Pt(".leaflet-layer").style.filter = `hue-rotate(${s}deg) saturate(${l}) invert(${c})`
                            }, xt.renderMode = gt.mode, a()
                        }(), Pt("#circularcursor").style.display = "none", document.onmousemove = function(t) {
                            Pt("#circularcursor").style.left = t.clientX + "px", Pt("#circularcursor").style.top = t.clientY + "px"
                        }, Pt("#circleEraser").oninput = function() {
                            Gt = Pt("#circleEraser").value, Pt("#circularcursor").style.width = Gt + "px", Pt("#circularcursor").style.height = Gt + "px"
                        }, Pt("#revertEraser").onclick = Rt, Pt("#eraserDiv").onclick = t => {
                            Pt("#eraserTitle").click(), Ot(1)
                        }, Pt("#AIEraser").onclick = t => {
                            Pt("#eraserTitle").click(), Ot(2)
                        }, document.onkeydown = t => {
                            // t.preventDefault();
                            // let e = t.key.toUpperCase(),
                            //     r = t.ctrlKey || t.metaKey,
                            //     i = t.shiftKey;
                            // if ("F1" == e) Pt("#fileTitle").click();
                            // else if ("F2" == e) Pt("#showModeTitle").click();
                            // else if ("F3" == e) Pt("#eraserTitle").click();
                            // else if ("F4" == e) Pt("#drawTitle").click();
                            // else if ("F5" == e) Pt("#photoTitle").click();
                            // else if ("F6" == e) Pt("#gpxTitle").click();
                            // else if ("F11" == e) {
                            //     let t = Pt("#menu").style.display;
                            //     Pt("#menu").style.display = "none" == t ? "" : "none", "" == t ? yt.removeControl(bt) : yt.addControl(bt)
                            // } else "O" == e && r ? Pt("#importFile").click() : "Q" == e && r ? Pt("#clearAll").click() : "F" == e ? Pt("#fogMode").click() : "G" == e ? Pt("#lineMode").click() : "E" == e ? Pt("#eraserDiv").click() : "R" == e ? Pt("#AIEraser").click() : "Z" == e && r ? Pt("#revertEraser").onclick() : "C" == e ? Pt("#drawLine").onclick() : "X" == e ? Pt("#editLine").onclick() : "D" == e ? Pt("#deleteLine").onclick() : "S" != e || r || i ? "S" == e && r && !i ? Pt("#outputAll").onclick() : "S" == e && r && i ? Pt("#outputEdit").onclick() : "ESCAPE" == e && Nt() : Pt("#drawFinish").onclick()
                        }, yt.pm.setLang("zh"), Pt("#drawLine").onclick = function() {
                            Pt("#drawTitle").click(), Xt(this), yt.pm.enableDraw("Line")
                        }, Pt("#editLine").onclick = function() {
                            Pt("#drawTitle").click(), Xt(this), yt.pm.toggleGlobalEditMode()
                        }, Pt("#deleteLine").onclick = function() {
                            Pt("#drawTitle").click(), Xt(this), yt.pm.toggleGlobalRemovalMode()
                        }, Pt("#drawFinish").onclick = function() {
                            Pt("#drawTitle").click(), Xt(this), Lt(yt.pm.getGeomanDrawLayers(!0))
                        },
                        function() {
                            let t = navigator.languages ? navigator.languages[0] : navigator.language;
                            dt = t.slice(0, 2), "zh" != dt && (dt = "en", document.querySelectorAll("[i18n]").forEach((t => {
                                let e = t.attributes.i18n.value;
                                ft[e] && (t.textContent = ft[e][dt])
                            })), document.title = ft.title[dt], Pt("#outputEdit").title = ft.outputEditTips[dt])
                        }()
                }))
            },
            7641: (t, e, r) => {
                "use strict";
                r.d(e, {
                    AG: () => f,
                    YC: () => n,
                    wK: () => d,
                    ze: () => a
                });
                var i = r(8495),
                    o = r.n(i);

                function n(t) {
                    const e = {
                        o: 0,
                        l: 1,
                        h: 2,
                        w: 3,
                        j: 4,
                        s: 5,
                        k: 6,
                        t: 7,
                        r: 8,
                        i: 9
                    };
                    let r = 0;
                    if (t.indexOf(".") > 0) return null;
                    let i = t.split(" ")[0],
                        o = i.length;
                    if (o <= 10 || o > 12) return null;
                    for (var n = 4; n < o - 2; n++) {
                        if (null == e[i[n]]) return null;
                        r += e[i[n]] * 10 ** (o - 3 - n)
                    }
                    return r
                }

                function a(t) {
                    const e = "olhwjsktri",
                        r = "eizxdwknmo";
                    let i = "";
                    return t > 1e5 && (i += e[Math.floor(t / 1e5)]), t > 1e4 && (i += e[Math.floor(t % 1e5 / 1e4)]), t > 1e3 && (i += e[Math.floor(t % 1e4 / 1e3)]), t > 100 && (i += e[Math.floor(t % 1e3 / 100)]), i += e[Math.floor(t % 100 / 10)], i += e[Math.floor(t % 10)], i += r[Math.floor(t % 100 / 10)], i += r[Math.floor(t % 10)], o()(String(t)).slice(0, 4) + i
                }
                t = r.hmd(t);
                const s = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 4096],
                    l = "olhwjsktri",
                    c = "eizxdwknmo",
                    h = {
                        o: 0,
                        l: 1,
                        h: 2,
                        w: 3,
                        j: 4,
                        s: 5,
                        k: 6,
                        t: 7,
                        r: 8,
                        i: 9
                    },
                    u = {
                        e: 0,
                        i: 1,
                        z: 2,
                        x: 3,
                        d: 4,
                        w: 5,
                        k: 6,
                        n: 7,
                        m: 8,
                        o: 9
                    },
                    f = {
                        AREA: "#",
                        NATIVE: "*",
                        LAYER: "~"
                    };

                function d(t) {
                    let e = t.z < 0 ? 0 : t.z,
                        r = t.type == f.AREA ? 74 : 0,
                        i = s[e] * t.y + t.x,
                        n = "",
                        a = String(i);
                    for (let t = 0; t < a.length; t++) n += l[a[t]];
                    let h = (i + 9 - t.z + r) % 100;
                    return n += c[Math.floor(h / 10)] + c[h % 10], o()(String(i + 9 - t.z + r)).slice(0, 4) + n
                }
                r.c[r.s] === t && ["c942jojhwzd", "c70dlwhwzk", "8073swwsxn", "63c3hhrkhkx", "40c0lokkhkd", "9be4wklkw", "aab3tid", "5fd0loiid", "46bahrwmd", "c942jojhwzd", "d40bjhrhixe", "411aljhtxe", "46bahrwmd", "6dfclooiiei", "085dhkrwrxo", "4ffckwkde", "522alotrnm", "b790lklhwoxe", "6f49llim", "45c4oeo", "8f14oen", "45c4leo", "9bf3oiw", "c51coix", "c409lotjwkie"].forEach((t => function(t) {
                    let e = function(t) {
                            let e = t.substring(4, t.length - 2),
                                r = t.substring(t.length - 2, t.length),
                                i = 10 * u[r[0]] + u[r[1]],
                                o = "";
                            for (let t = 0; t < e.length; t++) o += h[e[t]];
                            let n = parseInt(o),
                                a = 9 - (i + 100 - n % 100) % 100,
                                l = f.NATIVE;
                            return a < -20 ? (a += 74, l = f.AREA) : a < 9 && (l = f.LAYER), {
                                x: a <= 0 ? 0 : n % s[a],
                                y: a <= 0 ? 0 : Math.floor(n / s[a]),
                                z: a,
                                type: l
                            }
                        }(t),
                        r = d(e);
                    console.log(e), console.assert(r == t, `Error: ${t}, ${r}, ${e.x}, ${e.y}, ${e.z}, ${s[e.z]*e.y+e.x}`)
                }(t)))
            },
            4959: () => {
                L.Proj && (L.CRS.Baidu = new L.Proj.CRS("EPSG:900913", "+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs", {
                    resolutions: function() {
                        var t = [];
                        t[0] = Math.pow(2, 18);
                        for (var e = 1; e < 19; e++) t[e] = Math.pow(2, 18 - e);
                        return t
                    }(),
                    origin: [0, 0],
                    bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
                })), L.TileLayer.ChinaProvider = L.TileLayer.extend({
                    initialize: function(t, e) {
                        var r = L.TileLayer.ChinaProvider.providers;
                        e = e || {};
                        var i = t.split("."),
                            o = i[0],
                            n = i[1],
                            a = i[2],
                            s = r[o][n][a];
                        e.subdomains = r[o].Subdomains, e.key = e.key || r[o].key, "tms" in r[o] && (e.tms = r[o].tms), L.TileLayer.prototype.initialize.call(this, s, e)
                    }
                }), L.TileLayer.ChinaProvider.providers = {
                    TianDiTu: {
                        Normal: {
                            Map: "https://t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}",
                            Annotion: "https://t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}"
                        },
                        Satellite: {
                            Map: "http://t{s}.tianditu.gov.cn/img_w/wmts?T=img_w&X={x}&Y={y}&L={z}&tk={key}",
                            Annotion: "https://t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}"
                        },
                        Terrain: {
                            Map: "https://t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}",
                            Annotion: "https://t{s}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}"
                        },
                        Subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
                        key: "f31036479b9f4b32f7679933bba503c9"
                    },
                    GaoDe: {
                        Normal: {
                            Map: "https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
                            Map7: "http://webst0{s}.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}",
                            Map9: "http://webst0{s}.is.autonavi.com/appmaptile?style=9&x={x}&y={y}&z={z}"
                        },
                        Satellite: {
                            Map: "https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
                            Annotion: "https://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}"
                        },
                        Subdomains: ["1", "2", "3", "4"]
                    },
                    Geoq: {
                        Normal: {
                            Map: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
                            PurplishBlue: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
                            Gray: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
                            Warm: "//map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}"
                        },
                        Theme: {
                            Hydro: "https://thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}"
                        },
                        Subdomains: []
                    },
                    OSM: {
                        Normal: {
                            Map: "https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                        },
                        Subdomains: ["a", "b", "c"]
                    },
                    Baidu: {
                        Normal: {
                            Map: "https://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1"
                        },
                        Satellite: {
                            Map: "https://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46",
                            Annotion: "https://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020"
                        },
                        Subdomains: "0123456789",
                        tms: !0
                    },
                    Tencent: {
                        Normal: {
                            Map: "https://rt{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={-y}&type=vector&style=0"
                        },
                        Subdomains: "012",
                        tms: !0
                    },
                    SiweiEarth: {
                        Satellite: {
                            Map: "https://swapi.siweiearth.com/sj_raster/v6/wmts/tile/10000201/3?ak=sfed2c622363bfe8d4db1ceb84c2107792&tilematrix={z}&tilecol={x}&tilerow={y}&request=gettile&service=wmts"
                        },
                        Subdomains: "swapi"
                    }
                }
            },
            5738: () => {
                L.CoordConver = function() {
                    this.bd09_To_gps84 = function(t, e) {
                        var r = this.bd09_To_gcj02(t, e);
                        return this.gcj02_To_gps84(r.lng, r.lat)
                    }, this.gps84_To_bd09 = function(t, e) {
                        var r = this.gps84_To_gcj02(t, e);
                        return this.gcj02_To_bd09(r.lng, r.lat)
                    }, this.gps84_To_gcj02 = function(i, a) {
                        var s = o(i - 105, a - 35),
                            l = n(i - 105, a - 35),
                            c = a / 180 * t,
                            h = Math.sin(c);
                        h = 1 - r * h * h;
                        var u = Math.sqrt(h);
                        return s = 180 * s / (e * (1 - r) / (h * u) * t), {
                            lng: i + (l = 180 * l / (e / u * Math.cos(c) * t)),
                            lat: a + s
                        }
                    }, this.gcj02_To_gps84 = function(i, a) {
                        var s = function(i, a) {
                            var s = o(i - 105, a - 35),
                                l = n(i - 105, a - 35),
                                c = a / 180 * t,
                                h = Math.sin(c);
                            h = 1 - r * h * h;
                            var u = Math.sqrt(h);
                            return s = 180 * s / (e * (1 - r) / (h * u) * t), {
                                lng: i + (l = 180 * l / (e / u * Math.cos(c) * t)),
                                lat: a + s
                            }
                        }(i, a);
                        return {
                            lng: 2 * i - s.lng,
                            lat: 2 * a - s.lat
                        }
                    }, this.gcj02_To_bd09 = function(t, e) {
                        var r = Math.sqrt(t * t + e * e) + 2e-5 * Math.sin(e * i),
                            o = Math.atan2(e, t) + 3e-6 * Math.cos(t * i);
                        return {
                            lng: r * Math.cos(o) + .0065,
                            lat: r * Math.sin(o) + .006
                        }
                    }, this.bd09_To_gcj02 = function(t, e) {
                        var r = t - .0065,
                            o = e - .006,
                            n = Math.sqrt(r * r + o * o) - 2e-5 * Math.sin(o * i),
                            a = Math.atan2(o, r) - 3e-6 * Math.cos(r * i);
                        return {
                            lng: n * Math.cos(a),
                            lat: n * Math.sin(a)
                        }
                    };
                    const t = 3.141592653589793,
                        e = 6378245,
                        r = .006693421622965943,
                        i = 3e3 * t / 180;

                    function o(e, r) {
                        var i = 2 * e - 100 + 3 * r + .2 * r * r + .1 * e * r + .2 * Math.sqrt(Math.abs(e));
                        return i += 2 * (20 * Math.sin(6 * e * t) + 20 * Math.sin(2 * e * t)) / 3, (i += 2 * (20 * Math.sin(r * t) + 40 * Math.sin(r / 3 * t)) / 3) + 2 * (160 * Math.sin(r / 12 * t) + 320 * Math.sin(r * t / 30)) / 3
                    }

                    function n(e, r) {
                        var i = 300 + e + 2 * r + .1 * e * e + .1 * e * r + .1 * Math.sqrt(Math.abs(e));
                        return i += 2 * (20 * Math.sin(6 * e * t) + 20 * Math.sin(2 * e * t)) / 3, (i += 2 * (20 * Math.sin(e * t) + 40 * Math.sin(e / 3 * t)) / 3) + 2 * (150 * Math.sin(e / 12 * t) + 300 * Math.sin(e / 30 * t)) / 3
                    }
                }, L.coordConver = function() {
                    return new L.CoordConver
                }, L.tileLayer.chinaProvider = function(t, e) {
                    return (e = e || {}).corrdType = function(t) {
                        var e = "wgs84";
                        switch (t.split(".")[0]) {
                            case "Geoq":
                            case "GaoDe":
                            case "Google":
                            case "SiweiEarth":
                            case "Tencent":
                                e = "gcj02";
                                break;
                            case "Baidu":
                                e = "bd09";
                                break;
                            case "OSM":
                            case "TianDiTu":
                                e = "wgs84"
                        }
                        return e
                    }(t), new L.TileLayer.ChinaProvider(t, e)
                }, L.GridLayer.include({
                    _setZoomTransform: function(t, e, r) {
                        var i = e;
                        null != i && this.options && ("gcj02" == this.options.corrdType ? i = L.coordConver().gps84_To_gcj02(e.lng, e.lat) : "bd09" == this.options.corrdType && (i = L.coordConver().gps84_To_bd09(e.lng, e.lat)));
                        var o = this._map.getZoomScale(r, t.zoom),
                            n = t.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(i, r)).round();
                        L.Browser.any3d ? L.DomUtil.setTransform(t.el, n, o) : L.DomUtil.setPosition(t.el, n)
                    },
                    _getTiledPixelBounds: function(t) {
                        var e = t;
                        null != e && this.options && ("gcj02" == this.options.corrdType ? e = L.coordConver().gps84_To_gcj02(t.lng, t.lat) : "bd09" == this.options.corrdType && (e = L.coordConver().gps84_To_bd09(t.lng, t.lat)));
                        var r = this._map,
                            i = r._animatingZoom ? Math.max(r._animateToZoom, r.getZoom()) : r.getZoom(),
                            o = r.getZoomScale(i, this._tileZoom),
                            n = r.project(e, this._tileZoom).floor(),
                            a = r.getSize().divideBy(2 * o);
                        return new L.Bounds(n.subtract(a), n.add(a))
                    }
                })
            },
            1153: (t, e, r) => {
                var i = function() {
                    "use strict";
                    var t, e = /\s*/g,
                        i = /^\s*|\s*$/g,
                        o = /\s+/;

                    function n(t) {
                        if (!t || !t.length) return 0;
                        for (var e = 0, r = 0; e < t.length; e++) r = (r << 5) - r + t.charCodeAt(e) | 0;
                        return r
                    }

                    function a(t, e) {
                        return t.getElementsByTagName(e)
                    }

                    function s(t, e) {
                        return t.getAttribute(e)
                    }

                    function l(t, e) {
                        return parseFloat(s(t, e))
                    }

                    function c(t, e) {
                        var r = a(t, e);
                        return r.length ? r[0] : null
                    }

                    function h(t) {
                        for (var e = 0, r = []; e < t.length; e++) r[e] = parseFloat(t[e]);
                        return r
                    }

                    function u(t) {
                        var e;
                        return t && (e = t).normalize && e.normalize(), t && t.textContent || ""
                    }

                    function f(t, e) {
                        var r, i, o = {};
                        for (i = 0; i < e.length; i++)(r = c(t, e[i])) && (o[e[i]] = u(r));
                        return o
                    }

                    function d(t, e) {
                        for (var r in e) t[r] = e[r]
                    }

                    function p(t) {
                        return h(t.replace(e, "").split(","))
                    }

                    function g(t) {
                        for (var e = t.replace(i, "").split(o), r = [], n = 0; n < e.length; n++) r.push(p(e[n]));
                        return r
                    }

                    function y(t) {
                        var e, r = [l(t, "lon"), l(t, "lat")],
                            i = c(t, "ele"),
                            o = c(t, "gpxtpx:hr") || c(t, "hr"),
                            n = c(t, "time");
                        return i && (e = parseFloat(u(i)), isNaN(e) || r.push(e)), {
                            coordinates: r,
                            time: n ? u(n) : null,
                            heartRate: o ? parseFloat(u(o)) : null
                        }
                    }
                    if ("undefined" != typeof XMLSerializer) t = new XMLSerializer;
                    else {
                        var m = "object" == typeof process && !process.browser,
                            v = "object" == typeof Titanium;
                        if (!m && !v) throw new Error("Unable to initialize serializer");
                        t = new(r(8708).XMLSerializer)
                    }

                    function x(e) {
                        return void 0 !== e.xml ? e.xml : t.serializeToString(e)
                    }
                    return {
                        kml: function(t) {
                            for (var e = {
                                    type: "FeatureCollection",
                                    features: []
                                }, r = {}, i = {}, o = {}, l = ["Polygon", "LineString", "Point", "Track", "gx:Track"], f = a(t, "Placemark"), d = a(t, "Style"), y = a(t, "StyleMap"), m = 0; m < d.length; m++) {
                                var v = n(x(d[m])).toString(16);
                                r["#" + s(d[m], "id")] = v, i[v] = d[m]
                            }
                            for (var b = 0; b < y.length; b++) {
                                r["#" + s(y[b], "id")] = n(x(y[b])).toString(16);
                                for (var S = a(y[b], "Pair"), w = {}, _ = 0; _ < S.length; _++) w[u(c(S[_], "key"))] = u(c(S[_], "styleUrl"));
                                o["#" + s(y[b], "id")] = w
                            }
                            for (var P = 0; P < f.length; P++) e.features = e.features.concat(E(f[P]));

                            function M(t) {
                                var e, r;
                                return "#" === (t = t || "").substr(0, 1) && (t = t.substr(1)), 6 !== t.length && 3 !== t.length || (e = t), 8 === t.length && (r = parseInt(t.substr(0, 2), 16) / 255, e = "#" + t.substr(6, 2) + t.substr(4, 2) + t.substr(2, 2)), [e, isNaN(r) ? void 0 : r]
                            }

                            function A(t) {
                                var e = a(t, "coord"),
                                    r = [],
                                    i = [];
                                0 === e.length && (e = a(t, "gx:coord"));
                                for (var o = 0; o < e.length; o++) r.push(h(u(e[o]).split(" ")));
                                for (var n = a(t, "when"), s = 0; s < n.length; s++) i.push(u(n[s]));
                                return {
                                    coords: r,
                                    times: i
                                }
                            }

                            function L(t) {
                                var e, r, i, o, n, s = [],
                                    h = [];
                                if (c(t, "MultiGeometry")) return L(c(t, "MultiGeometry"));
                                if (c(t, "MultiTrack")) return L(c(t, "MultiTrack"));
                                if (c(t, "gx:MultiTrack")) return L(c(t, "gx:MultiTrack"));
                                for (i = 0; i < l.length; i++)
                                    if (r = a(t, l[i]))
                                        for (o = 0; o < r.length; o++)
                                            if (e = r[o], "Point" === l[i]) s.push({
                                                type: "Point",
                                                coordinates: p(u(c(e, "coordinates")))
                                            });
                                            else if ("LineString" === l[i]) s.push({
                                    type: "LineString",
                                    coordinates: g(u(c(e, "coordinates")))
                                });
                                else if ("Polygon" === l[i]) {
                                    var f = a(e, "LinearRing"),
                                        d = [];
                                    for (n = 0; n < f.length; n++) d.push(g(u(c(f[n], "coordinates"))));
                                    s.push({
                                        type: "Polygon",
                                        coordinates: d
                                    })
                                } else if ("Track" === l[i] || "gx:Track" === l[i]) {
                                    var y = A(e);
                                    s.push({
                                        type: "LineString",
                                        coordinates: y.coords
                                    }), y.times.length && h.push(y.times)
                                }
                                return {
                                    geoms: s,
                                    coordTimes: h
                                }
                            }

                            function E(t) {
                                var e, n = L(t),
                                    l = {},
                                    h = u(c(t, "name")),
                                    f = u(c(t, "address")),
                                    d = u(c(t, "styleUrl")),
                                    p = u(c(t, "description")),
                                    g = c(t, "TimeSpan"),
                                    y = c(t, "TimeStamp"),
                                    m = c(t, "ExtendedData"),
                                    v = c(t, "LineStyle"),
                                    x = c(t, "PolyStyle"),
                                    b = c(t, "visibility");
                                if (!n.geoms.length) return [];
                                if (h && (l.name = h), f && (l.address = f), d) {
                                    "#" !== d[0] && (d = "#" + d), l.styleUrl = d, r[d] && (l.styleHash = r[d]), o[d] && (l.styleMapHash = o[d], l.styleHash = r[o[d].normal]);
                                    var S = i[l.styleHash];
                                    if (S) {
                                        v || (v = c(S, "LineStyle")), x || (x = c(S, "PolyStyle"));
                                        var w = c(S, "IconStyle");
                                        if (w) {
                                            var _ = c(w, "Icon");
                                            if (_) {
                                                var P = u(c(_, "href"));
                                                P && (l.icon = P)
                                            }
                                        }
                                    }
                                }
                                if (p && (l.description = p), g) {
                                    var A = u(c(g, "begin")),
                                        E = u(c(g, "end"));
                                    l.timespan = {
                                        begin: A,
                                        end: E
                                    }
                                }
                                if (y && (l.timestamp = u(c(y, "when"))), v) {
                                    var z = M(u(c(v, "color"))),
                                        T = z[0],
                                        k = z[1],
                                        C = parseFloat(u(c(v, "width")));
                                    T && (l.stroke = T), isNaN(k) || (l["stroke-opacity"] = k), isNaN(C) || (l["stroke-width"] = C)
                                }
                                if (x) {
                                    var D = M(u(c(x, "color"))),
                                        I = D[0],
                                        B = D[1],
                                        F = u(c(x, "fill")),
                                        R = u(c(x, "outline"));
                                    I && (l.fill = I), isNaN(B) || (l["fill-opacity"] = B), F && (l["fill-opacity"] = "1" === F ? l["fill-opacity"] || 1 : 0), R && (l["stroke-opacity"] = "1" === R ? l["stroke-opacity"] || 1 : 0)
                                }
                                if (m) {
                                    var G = a(m, "Data"),
                                        U = a(m, "SimpleData");
                                    for (e = 0; e < G.length; e++) l[G[e].getAttribute("name")] = u(c(G[e], "value"));
                                    for (e = 0; e < U.length; e++) l[U[e].getAttribute("name")] = u(U[e])
                                }
                                b && (l.visibility = u(b)), n.coordTimes.length && (l.coordTimes = 1 === n.coordTimes.length ? n.coordTimes[0] : n.coordTimes);
                                var O = {
                                    type: "Feature",
                                    geometry: 1 === n.geoms.length ? n.geoms[0] : {
                                        type: "GeometryCollection",
                                        geometries: n.geoms
                                    },
                                    properties: l
                                };
                                return s(t, "id") && (O.id = s(t, "id")), [O]
                            }
                            return e
                        },
                        gpx: function(t) {
                            var e, r, i, o, n = a(t, "trk"),
                                l = a(t, "rte"),
                                h = a(t, "wpt"),
                                p = {
                                    type: "FeatureCollection",
                                    features: []
                                };
                            for (e = 0; e < n.length; e++)(r = v(n[e])) && p.features.push(r);
                            for (e = 0; e < l.length; e++)(r = x(l[e])) && p.features.push(r);
                            for (e = 0; e < h.length; e++) p.features.push((i = h[e], o = void 0, d(o = S(i), f(i, ["sym"])), {
                                type: "Feature",
                                properties: o,
                                geometry: {
                                    type: "Point",
                                    coordinates: y(i).coordinates
                                }
                            }));

                            function g(t, e) {
                                for (var r = 0; r < e; r++) t.push(null);
                                return t
                            }

                            function m(t, e) {
                                var r = a(t, e),
                                    i = [],
                                    o = [],
                                    n = [],
                                    s = r.length;
                                if (s < 2) return {};
                                for (var l = 0; l < s; l++) {
                                    var c = y(r[l]);
                                    i.push(c.coordinates), c.time && o.push(c.time), (c.heartRate || n.length) && (n.length || g(n, l), n.push(c.heartRate || null))
                                }
                                return {
                                    line: i,
                                    times: o,
                                    heartRates: n
                                }
                            }

                            function v(t) {
                                for (var e, r = a(t, "trkseg"), i = [], o = [], n = [], s = 0; s < r.length; s++)
                                    if ((e = m(r[s], "trkpt")) && (e.line && i.push(e.line), e.times && e.times.length && o.push(e.times), n.length || e.heartRates && e.heartRates.length)) {
                                        if (!n.length)
                                            for (var l = 0; l < s; l++) n.push(g([], i[l].length));
                                        e.heartRates && e.heartRates.length ? n.push(e.heartRates) : n.push(g([], e.line.length || 0))
                                    } if (0 !== i.length) {
                                    var h = S(t);
                                    return d(h, b(c(t, "extensions"))), o.length && (h.coordTimes = 1 === i.length ? o[0] : o), n.length && (h.heartRates = 1 === i.length ? n[0] : n), {
                                        type: "Feature",
                                        properties: h,
                                        geometry: {
                                            type: 1 === i.length ? "LineString" : "MultiLineString",
                                            coordinates: 1 === i.length ? i[0] : i
                                        }
                                    }
                                }
                            }

                            function x(t) {
                                var e = m(t, "rtept");
                                if (e.line) {
                                    var r = S(t);
                                    return d(r, b(c(t, "extensions"))), {
                                        type: "Feature",
                                        properties: r,
                                        geometry: {
                                            type: "LineString",
                                            coordinates: e.line
                                        }
                                    }
                                }
                            }

                            function b(t) {
                                var e = {};
                                if (t) {
                                    var r = c(t, "line");
                                    if (r) {
                                        var i = u(c(r, "color")),
                                            o = parseFloat(u(c(r, "opacity"))),
                                            n = parseFloat(u(c(r, "width")));
                                        i && (e.stroke = i), isNaN(o) || (e["stroke-opacity"] = o), isNaN(n) || (e["stroke-width"] = 96 * n / 25.4)
                                    }
                                }
                                return e
                            }

                            function S(t) {
                                var e = f(t, ["name", "cmt", "desc", "type", "time", "keywords"]),
                                    r = a(t, "link");
                                r.length && (e.links = []);
                                for (var i, o = 0; o < r.length; o++) d(i = {
                                    href: s(r[o], "href")
                                }, f(r[o], ["text", "type"])), e.links.push(i);
                                return e
                            }
                            return p
                        }
                    }
                }();
                t.exports = i
            },
            8708: t => {
                "use strict";
                t.exports = xmldom
            },
            4341: () => {}
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(t) {
        var e = __webpack_module_cache__[t];
        if (void 0 !== e) return e.exports;
        var r = __webpack_module_cache__[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return __webpack_modules__[t].call(r.exports, r, r.exports, __webpack_require__), r.loaded = !0, r.exports
    }
    __webpack_require__.c = __webpack_module_cache__, __webpack_require__.amdO = {}, __webpack_require__.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return __webpack_require__.d(e, {
            a: e
        }), e
    }, __webpack_require__.d = (t, e) => {
        for (var r in e) __webpack_require__.o(e, r) && !__webpack_require__.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, __webpack_require__.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), __webpack_require__.hmd = t => ((t = Object.create(t)).children || (t.children = []), Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id)
        }
    }), t), __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var __webpack_exports__ = __webpack_require__(__webpack_require__.s = 5310)
})();