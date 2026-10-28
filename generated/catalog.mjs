// Generated from product manifests and SVG revisions. Do not edit here.
export default {
  "schemaVersion": 1,
  "product": {
    "schemaVersion": 1,
    "id": "arqo",
    "name": "ARQO for SketchUp",
    "host": "sketchup",
    "status": "design-prototype",
    "version": "0.1.0",
    "tools": [
      "tools/make-face/manifest.json",
      "tools/line-to-face/manifest.json",
      "tools/line-tool/manifest.json",
      "tools/make-box/manifest.json",
      "tools/panel/manifest.json",
      "tools/frame/manifest.json",
      "tools/divide/manifest.json",
      "tools/smart-offset/manifest.json",
      "tools/connect-heal/manifest.json",
      "tools/find-gap/manifest.json",
      "tools/weld/manifest.json",
      "tools/curve-to-arc/manifest.json",
      "tools/hide-show-lines/manifest.json",
      "tools/mirror/manifest.json",
      "tools/align/manifest.json",
      "tools/reference-scale/manifest.json",
      "tools/axis-length-scale/manifest.json",
      "tools/scale-definition/manifest.json",
      "tools/transformer/manifest.json",
      "tools/reset-axis/manifest.json",
      "tools/smart-slice/manifest.json",
      "tools/multi-slice/manifest.json",
      "tools/explode/manifest.json",
      "tools/smart-select/manifest.json",
      "tools/filter-selection/manifest.json",
      "tools/crop-lasso-select/manifest.json",
      "tools/to-components/manifest.json",
      "tools/attach-to-face/manifest.json",
      "tools/copy-follow/manifest.json",
      "tools/delete-overlap/manifest.json",
      "tools/material-tools/manifest.json",
      "tools/paint/manifest.json",
      "tools/smart-stair/manifest.json",
      "tools/tag-tools/manifest.json",
      "tools/import-dxf/manifest.json",
      "tools/import-camera/manifest.json",
      "tools/export-scenes/manifest.json",
      "tools/scene-shadows/manifest.json",
      "tools/clipping-camera/manifest.json",
      "tools/draw-boundary/manifest.json",
      "tools/arqo-push/manifest.json"
    ],
    "coreCapabilities": [
      "selection",
      "geometry",
      "objects",
      "units",
      "materials",
      "tags",
      "camera",
      "io"
    ],
    "categories": [
      {
        "id": "geometry",
        "label": {
          "en": "Geometry",
          "tr": "Geometri"
        }
      },
      {
        "id": "repair",
        "label": {
          "en": "Repair",
          "tr": "Onarım"
        }
      },
      {
        "id": "transform",
        "label": {
          "en": "Transform",
          "tr": "Dönüşüm"
        }
      },
      {
        "id": "cut",
        "label": {
          "en": "Cut",
          "tr": "Kesme"
        }
      },
      {
        "id": "components",
        "label": {
          "en": "Components",
          "tr": "Bileşen"
        }
      },
      {
        "id": "selection",
        "label": {
          "en": "Selection",
          "tr": "Seçim"
        }
      },
      {
        "id": "materials",
        "label": {
          "en": "Materials",
          "tr": "Malzeme"
        }
      },
      {
        "id": "architecture",
        "label": {
          "en": "Architecture",
          "tr": "Mimari"
        }
      },
      {
        "id": "organization",
        "label": {
          "en": "Organization",
          "tr": "Düzen"
        }
      },
      {
        "id": "import",
        "label": {
          "en": "Import",
          "tr": "Aktarım"
        }
      },
      {
        "id": "presentation",
        "label": {
          "en": "Presentation",
          "tr": "Sunum"
        }
      }
    ],
    "specialTools": [
      "arqo.tool.a01"
    ],
    "quickTools": [
      "arqo.tool.s01",
      "arqo.tool.s10",
      "arqo.tool.s09",
      "arqo.tool.s11",
      "arqo.tool.s08",
      "arqo.tool.s14",
      "arqo.tool.s15",
      "arqo.tool.s20",
      "arqo.tool.s21",
      "arqo.tool.s24",
      "arqo.tool.s30"
    ],
    "requiredBaseline": [
      "S01",
      "S02",
      "S03",
      "S04",
      "S05",
      "S06",
      "S07",
      "S08",
      "S09",
      "S10",
      "S11",
      "S12",
      "S13",
      "S14",
      "S15",
      "S16",
      "S17",
      "S18",
      "S19",
      "S20",
      "S21",
      "S22",
      "S23",
      "S24",
      "S25",
      "S26",
      "S27",
      "S28",
      "S29",
      "S30",
      "S31",
      "S32",
      "S33",
      "S34",
      "S35",
      "S36",
      "S37",
      "S38",
      "S39",
      "S40"
    ],
    "iconReviewTools": [
      "arqo.tool.s01",
      "arqo.tool.s10",
      "arqo.tool.s11",
      "arqo.tool.s14",
      "arqo.tool.s21",
      "arqo.tool.s33"
    ]
  },
  "tools": [
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s01",
      "requirementId": "S01",
      "moduleId": "arqo.make_face",
      "host": "sketchup",
      "version": "0.3.0",
      "implementationStatus": "in-development",
      "category": "geometry",
      "locales": {
        "en": {
          "name": "Make Face+",
          "summary": "Create faces from suitable closed planar edges.",
          "description": "Create faces from selected edges, also from the right-click menu."
        },
        "tr": {
          "name": "Make Face+",
          "summary": "Çizgilerden yüzey, tek bir adımda.",
          "description": "Seçili kenarlardan yüzey oluşturma ve sağ tık erişimi."
        }
      },
      "license": {
        "sku": "arqo.tool.s01",
        "entitlement": "arqo.tool.s01"
      },
      "commands": [
        {
          "id": "arqo.make_face",
          "entitlement": "arqo.tool.s01"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "crossings",
          "type": "string",
          "default": "keep",
          "options": [
            "keep",
            "split"
          ]
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "4104a890fc9d3ebd0b8b9f506fd4b998ed47913a5ffcd8e830b2b46939ee7bd5"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Simplified silhouette and object/action roles; 16/24/32 px study.",
            "sha256": "96b68f1222f74aab9bc7a33e12ee3eebab7ae97820b7113d17b673386cb9ed0f"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "65508934ac3fe7cacd4e3801314f4a113afeb366a1ce0d39eb7c17317e8fa8c5"
          }
        ]
      },
      "baselineCapabilities": [
        "Seçili kenarlardan yüzey üretimi; sağ tık erişimi."
      ],
      "acceptanceProfile": "sketchup-standard",
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "manifestPath": "tools/make-face/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "4104a890fc9d3ebd0b8b9f506fd4b998ed47913a5ffcd8e830b2b46939ee7bd5",
          "strokeWidth": 1.45,
          "body": "<path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"m5 10 17-5 5 17-17 5Z\"/><path d=\"m5 10 17-5 5 17-17 5Z\"/><path d=\"m8 9 3 1m12-3-1 3M25 21l-3-1M11 24l1-3\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "96b68f1222f74aab9bc7a33e12ee3eebab7ae97820b7113d17b673386cb9ed0f",
          "strokeWidth": 2,
          "body": "<path class=\"icon-surface\" fill=\"currentColor\" fill-opacity=\".18\" d=\"M5 10 23 5l4 18-18 4Z\"/><path class=\"icon-object\" d=\"M5 10 23 5l4 18-18 4Z\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"5\" cy=\"10\" r=\"2\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"23\" cy=\"5\" r=\"2\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"27\" cy=\"23\" r=\"2\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"9\" cy=\"27\" r=\"2\"/>",
          "note": "Simplified silhouette and object/action roles; 16/24/32 px study."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "65508934ac3fe7cacd4e3801314f4a113afeb366a1ce0d39eb7c17317e8fa8c5",
          "strokeWidth": 2,
          "body": "<path class=\"icon-surface\" fill=\"currentColor\" fill-opacity=\".18\" d=\"M5 10 23 5l4 18-18 4Z\"/><path class=\"icon-blue\" d=\"M5 10 23 5l4 18-18 4Z\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"5\" cy=\"10\" r=\"2\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"23\" cy=\"5\" r=\"2\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"27\" cy=\"23\" r=\"2\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"9\" cy=\"27\" r=\"2\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s02",
      "requirementId": "S02",
      "moduleId": "arqo.line_to_face",
      "host": "sketchup",
      "version": "0.4.1",
      "implementationStatus": "in-development",
      "category": "geometry",
      "locales": {
        "en": {
          "name": "Line to Face",
          "summary": "Create faces from lines and reference directions.",
          "description": "Raise lines into walls, Push/Pull style: click a line, move the mouse up or down, click or type the height. Lean the walls with the orange handle or a typed angle; a plan leans out, in or one way."
        },
        "tr": {
          "name": "Line to Face",
          "summary": "Çizgileri yüksekliği olan yüzeylere dönüştür.",
          "description": "Çizgileri duvara kaldırır, Push/Pull gibi: çizgiye tıklayın, mouse'u yukarı ya da aşağı götürün, tıklayın ya da yüksekliği yazın. Duvarları turuncu tutamaçla ya da yazılan açıyla eğin; plan dışa, içe ya da tek yöne eğilir."
        }
      },
      "license": {
        "sku": "arqo.tool.s02",
        "entitlement": "arqo.tool.s02"
      },
      "commands": [
        {
          "id": "arqo.line_to_face",
          "entitlement": "arqo.tool.s02"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 5,
      "settings": [
        {
          "id": "heightMm",
          "type": "number",
          "default": 3000
        },
        {
          "id": "angleSnapDeg",
          "type": "number",
          "default": 15
        },
        {
          "id": "leanMode",
          "type": "string",
          "default": "out",
          "options": [
            "out",
            "in",
            "one"
          ]
        },
        {
          "id": "result",
          "type": "string",
          "default": "loose",
          "options": [
            "loose",
            "group"
          ]
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        },
        {
          "from": 2,
          "to": 3,
          "plan": "migration-2-3.md"
        },
        {
          "from": 1,
          "to": 3,
          "plan": "migration-1-3.md"
        },
        {
          "from": 3,
          "to": 4,
          "plan": "migration-3-4.md"
        },
        {
          "from": 1,
          "to": 4,
          "plan": "migration-1-4.md"
        },
        {
          "from": 4,
          "to": 5,
          "plan": "migration-4-5.md"
        },
        {
          "from": 1,
          "to": 5,
          "plan": "migration-1-5.md"
        }
      ],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "124fe3858eec0d8dd6e6c4949be2faa7891f1dbd00220eae6373525f9c8f4fd7"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "1807b7ca059ed68e7841a5d061c99a3d020e4602c692fc7713f6c611282a0405"
          }
        ]
      },
      "baselineCapabilities": [
        "Çizgilerden yüzey; modifier ile Z/yükseklik davranışı."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/line-to-face/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "124fe3858eec0d8dd6e6c4949be2faa7891f1dbd00220eae6373525f9c8f4fd7",
          "strokeWidth": 1.45,
          "body": "<path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"M7 24V13L24 7v17Z\"/><path d=\"M7 24V13L24 7v17M4 27h24M10 19l11-4M4 9V4m-2 2 2-2 2 2\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "1807b7ca059ed68e7841a5d061c99a3d020e4602c692fc7713f6c611282a0405",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" d=\"M7 24V13L24 7v17Z\"/><path class=\"icon-green\" d=\"M4 27h24\"/><path class=\"icon-action\" d=\"M10 19l11-4M4 9V4M2 6l2-2 2 2\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s03",
      "requirementId": "S03",
      "moduleId": "arqo.line_tool",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "geometry",
      "locales": {
        "en": {
          "name": "Line Tool",
          "summary": "Draw and edit connected edges.",
          "description": "Lines, guide lines and points; arithmetic in the length box and x,y,z input."
        },
        "tr": {
          "name": "Line Tool",
          "summary": "Ölçülü çizgiler ve referans noktaları.",
          "description": "Çizgi, kılavuz çizgi ve nokta; uzunlukta aritmetik işlemler ve x,y,z girişi."
        }
      },
      "license": {
        "sku": "arqo.tool.s03",
        "entitlement": "arqo.tool.s03"
      },
      "commands": [
        {
          "id": "arqo.line_tool",
          "entitlement": "arqo.tool.s03"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "d2d88d24ef1da7732a61341111d0bd930db4359c2d9f2657086d2abfeb4595ba"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "dc708eba69b008e6d2e52899c431fa5ccd38bc0db6a42e72fd596def29f727f3"
          }
        ]
      },
      "baselineCapabilities": [
        "Line, construction line/point; uzunlukta +, -, *, / işlemleri ve x,y,z nokta girişi."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/line-tool/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "d2d88d24ef1da7732a61341111d0bd930db4359c2d9f2657086d2abfeb4595ba",
          "strokeWidth": 1.45,
          "body": "<path d=\"m6 25 19-19M6 6v3m0 4v3m0 4v3M9 26h3m4 0h3m4 0h3\"/><circle cx=\"6\" cy=\"25\" r=\"2\"/><circle cx=\"25\" cy=\"6\" r=\"2\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "dc708eba69b008e6d2e52899c431fa5ccd38bc0db6a42e72fd596def29f727f3",
          "strokeWidth": 2,
          "body": "<path class=\"icon-green\" d=\"M6 6v3m0 4v3m0 4v1M9 26h3m4 0h3m4 0h3\"/><path class=\"icon-action\" d=\"m6 25 19-19\"/><circle class=\"icon-action\" cx=\"6\" cy=\"25\" r=\"2\"/><circle class=\"icon-action\" cx=\"25\" cy=\"6\" r=\"2\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s04",
      "requirementId": "S04",
      "moduleId": "arqo.make_box",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "geometry",
      "locales": {
        "en": {
          "name": "Make Box+",
          "summary": "Build box geometry from reference inputs.",
          "description": "Build a box from three or four points and a height."
        },
        "tr": {
          "name": "Make Box+",
          "summary": "Birkaç noktadan yeni bir hacim.",
          "description": "Üç veya dört nokta ve yükseklikle kutu oluşturma."
        }
      },
      "license": {
        "sku": "arqo.tool.s04",
        "entitlement": "arqo.tool.s04"
      },
      "commands": [
        {
          "id": "arqo.make_box",
          "entitlement": "arqo.tool.s04"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "f9c6337e25cb91a62ac11c09b92643de3f467267735176617eb2f1752e602dda"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "b31f2b8952e61765168cad30061f1718bf64fe107143fd9874f12dfdad60401a"
          }
        ]
      },
      "baselineCapabilities": [
        "Üç/dört nokta ve yükseklikle kutu oluşturma."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/make-box/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "f9c6337e25cb91a62ac11c09b92643de3f467267735176617eb2f1752e602dda",
          "strokeWidth": 1.45,
          "body": "<path d=\"m16 4 11 6v13l-11 6-11-6V10Z M5 10l11 6 11-6M16 16v13\"/><path d=\"M10 6 16 3l6 3\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "b31f2b8952e61765168cad30061f1718bf64fe107143fd9874f12dfdad60401a",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" d=\"m16 4 11 6v13l-11 6-11-6V10Z\"/><path class=\"icon-blue\" d=\"M5 10l11 6 11-6M16 16v13\"/><path class=\"icon-action\" d=\"M10 6 16 3l6 3\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s05",
      "requirementId": "S05",
      "moduleId": "arqo.panel",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "geometry",
      "locales": {
        "en": {
          "name": "Panel",
          "summary": "Create panel elements from selected geometry.",
          "description": "Create panels from three points or from a selected face."
        },
        "tr": {
          "name": "Panel",
          "summary": "Yüzeylerinden yeni paneller üret.",
          "description": "Üç noktadan veya seçili yüzeyden panel üretimi."
        }
      },
      "license": {
        "sku": "arqo.tool.s05",
        "entitlement": "arqo.tool.s05"
      },
      "commands": [
        {
          "id": "arqo.panel",
          "entitlement": "arqo.tool.s05"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "bcaa27cc069e2ce7ce85f09fd348c073c94d6a4c52cead4fc4a6a46c14a5969b"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "e30385a84a4d8eb9a23e1aaaa1529625bba1ac46d54af3db759087a493221fa7"
          }
        ]
      },
      "baselineCapabilities": [
        "Üç noktadan veya seçili yüzeyden panel."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/panel/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "bcaa27cc069e2ce7ce85f09fd348c073c94d6a4c52cead4fc4a6a46c14a5969b",
          "strokeWidth": 1.45,
          "body": "<path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"m5 12 16-7 7 4-16 7Z\"/><path d=\"m5 12 16-7 7 4v13l-16 7-7-4Z M5 12l7 4 16-7M12 16v13\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "e30385a84a4d8eb9a23e1aaaa1529625bba1ac46d54af3db759087a493221fa7",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" d=\"m5 12 16-7 7 4v13l-16 7-7-4Z\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".45\" d=\"m5 12 16-7 7 4-16 7Z\"/><path class=\"icon-blue\" d=\"M12 16v13\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s06",
      "requirementId": "S06",
      "moduleId": "arqo.frame",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "geometry",
      "locales": {
        "en": {
          "name": "Frame",
          "summary": "Create frames around selected faces.",
          "description": "Create a frame from a face, edge or curve boundary."
        },
        "tr": {
          "name": "Frame",
          "summary": "Her sınır, bir çerçeveye dönüşebilir.",
          "description": "Yüzey, kenar veya eğri sınırından çerçeve oluşturma."
        }
      },
      "license": {
        "sku": "arqo.tool.s06",
        "entitlement": "arqo.tool.s06"
      },
      "commands": [
        {
          "id": "arqo.frame",
          "entitlement": "arqo.tool.s06"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "e5f2addbc3a2c911be19da798f90427b15b93ab0ec33a753b920007b1c8fba8a"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "fbc8e8ad458c4e5c4a9055674c56942754b8e3265d356ea84f69a7894c2fa6bb"
          }
        ]
      },
      "baselineCapabilities": [
        "Yüzey, kenar veya eğriden çerçeve."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/frame/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "e5f2addbc3a2c911be19da798f90427b15b93ab0ec33a753b920007b1c8fba8a",
          "strokeWidth": 1.45,
          "body": "<path d=\"m4 10 17-6 7 4v16l-17 5-7-4Z M4 10l7 4 17-6M11 14v15m4-12 9-3v8l-9 3Z\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "fbc8e8ad458c4e5c4a9055674c56942754b8e3265d356ea84f69a7894c2fa6bb",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" d=\"m4 10 17-6 7 4v16l-17 5-7-4Z\"/><path class=\"icon-blue\" d=\"M4 10l7 4 17-6M11 14v15\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".45\" d=\"m15 17 9-3v8l-9 3Z\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s07",
      "requirementId": "S07",
      "moduleId": "arqo.divide",
      "host": "sketchup",
      "version": "0.3.1",
      "implementationStatus": "in-development",
      "category": "geometry",
      "locales": {
        "en": {
          "name": "Divide+",
          "summary": "Edges and whole curves into equal parts, faces into a grid — previewed first.",
          "description": "A tool with a live preview: type 3 (parts), 3x2 (grid) or 600mm (spacing) and press Enter. Edges keep their data; a whole curve is divided along its length and keeps its shape (an arc at equal angles). A face grid runs along the edge you click (else the longest, said on the card), every cell is made and a solid stays a solid. Closed groups are never entered; one Undo."
        },
        "tr": {
          "name": "Divide+",
          "summary": "Kenarları ve bütün eğrileri eşit parçaya, yüzeyleri ızgaraya böl — önce önizleme.",
          "description": "Canlı önizlemeli araç: 3 (parça), 3x2 (ızgara) ya da 600mm (aralık) yazıp Enter. Kenarlar verisini korur; bütün eğri boyu boyunca bölünür ve biçimini korur (yay eşit açılarla). Yüz ızgarası tıkladığınız kenar boyunca (yoksa en uzun kenar, kartta yazar), her hücre oluşur ve katı katı kalır. Kapalı gruplara girilmez; tek Geri Al."
        }
      },
      "license": {
        "sku": "arqo.tool.s07",
        "entitlement": "arqo.tool.s07"
      },
      "commands": [
        {
          "id": "arqo.divide",
          "entitlement": "arqo.tool.s07"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "along",
          "type": "number",
          "default": 2
        },
        {
          "id": "across",
          "type": "number",
          "default": 2
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "7b73d97c8a6c9f750f1fc54d169b790ec37743f678ca0ac1f5280543b645410d"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A face split by two accent lines into a grid, one cell filled; stroke 2 for 16/24/32 px.",
            "sha256": "c3c2901ad6a5e662d8ea1b90ce3bdcebca6c5cc217e330c7766b949b75da6abb"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "02adba025e838697443e393e802f65e68fbb359bf01a9d06e34c5a1ced90d2f6"
          }
        ]
      },
      "baselineCapabilities": [
        "Yüzeyleri iki yönde bölme; uygun sağ tık akışı."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/divide/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "7b73d97c8a6c9f750f1fc54d169b790ec37743f678ca0ac1f5280543b645410d",
          "strokeWidth": 1.45,
          "body": "<path d=\"M5 5h22v22H5Zm7 0v22m8-22v22M5 12h22M5 20h22\"/><path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"M12 12h8v8h-8Z\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "c3c2901ad6a5e662d8ea1b90ce3bdcebca6c5cc217e330c7766b949b75da6abb",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" d=\"M4 6h24v20H4Z\"/><path class=\"icon-action\" d=\"M12 6v20m8-20v20M4 16h24\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"M13 7h6v8h-6Z\"/>",
          "note": "A face split by two accent lines into a grid, one cell filled; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "02adba025e838697443e393e802f65e68fbb359bf01a9d06e34c5a1ced90d2f6",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" d=\"M4 6h24v20H4Z\"/><path class=\"icon-action\" d=\"M12 6v20m8-20v20M4 16h24\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"M13 7h6v8h-6Z\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s08",
      "requirementId": "S08",
      "moduleId": "arqo.smart_offset",
      "host": "sketchup",
      "version": "0.4.2",
      "implementationStatus": "in-development",
      "category": "geometry",
      "locales": {
        "en": {
          "name": "Smart Offset",
          "summary": "Offset selected geometry with guided distances.",
          "description": "Offset every selected face outline with the mouse or a typed distance: inside, outside or both, several copies, remembered."
        },
        "tr": {
          "name": "Smart Offset",
          "summary": "Bir sınırdan sayısız olasılığa.",
          "description": "Seçili tüm yüzeylerin hattını fareyle ya da yazılan mesafeyle öteler: içe, dışa ya da iki yöne, birkaç kopya; değerler hatırlanır."
        }
      },
      "license": {
        "sku": "arqo.tool.s08",
        "entitlement": "arqo.tool.s08"
      },
      "commands": [
        {
          "id": "arqo.smart_offset",
          "entitlement": "arqo.tool.s08"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "distanceMm",
          "type": "number",
          "default": 50
        },
        {
          "id": "side",
          "type": "string",
          "default": "Inside"
        },
        {
          "id": "count",
          "type": "number",
          "default": 1
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "672dc419634e1d4f4ee3a53a2506760311fec3f8a9df011125e1d13f684a7ba3"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Face with one inset outline and the offset distance at the corner; fewer nested squares than v1.",
            "sha256": "96894697dc8c33afcd8adf2ca4703c5cf7c791a4a670e631f7ef1e0561001ff4"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "9869038d174c54b787dc621cbb1c87e62d186edb0e89a04a46a5cb3f0624168b"
          }
        ]
      },
      "baselineCapabilities": [
        "Çoklu, iki taraflı ve random offset; önceki değeri kullanma."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/smart-offset/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "672dc419634e1d4f4ee3a53a2506760311fec3f8a9df011125e1d13f684a7ba3",
          "strokeWidth": 1.45,
          "body": "<path d=\"M4 4h24v24H4Zm5 5h14v14H9Zm5 5h4v4h-4Z\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "96894697dc8c33afcd8adf2ca4703c5cf7c791a4a670e631f7ef1e0561001ff4",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"M4 4h24v24H4Z\"/><path class=\"icon-action\" d=\"M10.5 10.5h11v11h-11ZM4 4l6.5 6.5\"/>",
          "note": "Face with one inset outline and the offset distance at the corner; fewer nested squares than v1."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "9869038d174c54b787dc621cbb1c87e62d186edb0e89a04a46a5cb3f0624168b",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"M4 4h24v24H4Z\"/><path class=\"icon-action\" d=\"M10.5 10.5h11v11h-11ZM4 4l6.5 6.5\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s09",
      "requirementId": "S09",
      "moduleId": "arqo.connect_heal",
      "host": "sketchup",
      "version": "0.2.1",
      "implementationStatus": "in-development",
      "category": "repair",
      "locales": {
        "en": {
          "name": "Connect / Heal",
          "summary": "Connect edges and repair gaps.",
          "description": "Connect two edges, curves or arcs; extend an arc to a full circle."
        },
        "tr": {
          "name": "Connect / Heal",
          "summary": "Ayrık kenarları yeniden birleştir.",
          "description": "İki kenar, eğri veya yayı bağlama; yayı daireye uzatma."
        }
      },
      "license": {
        "sku": "arqo.tool.s09",
        "entitlement": "arqo.tool.s09"
      },
      "commands": [
        {
          "id": "arqo.connect_heal",
          "entitlement": "arqo.tool.s09"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "gapLimitMm",
          "type": "number",
          "default": 25
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "f3ebe7b2cfbc4c37683c6651eb7b65c8747627dde6291d26924146417ccf0c92"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "01501f3932dd409978f5d61855c8410397a764be62f484386910fa7c17a233b9"
          }
        ]
      },
      "baselineCapabilities": [
        "İki edge/curve/arc bağlama; arc'ı circle'a uzatma."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/connect-heal/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "f3ebe7b2cfbc4c37683c6651eb7b65c8747627dde6291d26924146417ccf0c92",
          "strokeWidth": 1.45,
          "body": "<path d=\"M4 24 11 17m10-6 7-7M11 17l10-6\"/><circle cx=\"11\" cy=\"17\" r=\"3\"/><circle cx=\"21\" cy=\"11\" r=\"3\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "01501f3932dd409978f5d61855c8410397a764be62f484386910fa7c17a233b9",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" d=\"M4 24 11 17M21 11l7-7\"/><path class=\"icon-action\" d=\"M11 17l10-6\"/><circle class=\"icon-action\" cx=\"11\" cy=\"17\" r=\"3\"/><circle class=\"icon-action\" cx=\"21\" cy=\"11\" r=\"3\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s10",
      "requirementId": "S10",
      "moduleId": "arqo.find_gap",
      "host": "sketchup",
      "version": "0.2.1",
      "implementationStatus": "in-development",
      "category": "repair",
      "locales": {
        "en": {
          "name": "Find Gap",
          "summary": "Find open endpoints and gaps in edge geometry.",
          "description": "Find gaps and open edge ends, then fix them with its own automatic connect workflow."
        },
        "tr": {
          "name": "Find Gap",
          "summary": "Küçük boşluklar gözünden kaçmasın.",
          "description": "Boşluk ve kenar uçlarını bulma; kendi otomatik bağlama akışıyla düzeltme."
        }
      },
      "license": {
        "sku": "arqo.tool.s10",
        "entitlement": "arqo.tool.s10"
      },
      "commands": [
        {
          "id": "arqo.find_gap",
          "entitlement": "arqo.tool.s10"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "gapLimitMm",
          "type": "number",
          "default": 25
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "89735e99c36b57e7a7130cc09afbed21c1db1d9591a9985666b2a49f895b7099"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Simplified silhouette and object/action roles; 16/24/32 px study.",
            "sha256": "36c9d5040100ca2e966b2b0b1efc5f5edaaa1df2fa97047057cf1adf421fe3f7"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "cc9a78ea270625e0354466d037e8a69761181167777b8263d5019eddfd2771d8"
          }
        ]
      },
      "baselineCapabilities": [
        "Boşluk ve kenar uçlarını bulma; auto-connect akışı."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/find-gap/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "89735e99c36b57e7a7130cc09afbed21c1db1d9591a9985666b2a49f895b7099",
          "strokeWidth": 1.45,
          "body": "<path d=\"M4 25V7h13m8 10v8H12\"/><circle cx=\"22\" cy=\"10\" r=\"6\"/><path d=\"m26 14 4 4M20 10h4\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "36c9d5040100ca2e966b2b0b1efc5f5edaaa1df2fa97047057cf1adf421fe3f7",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" d=\"M7 11V5h20v22H7v-6\"/><circle class=\"icon-action\" cx=\"7\" cy=\"11\" r=\"2.5\"/><circle class=\"icon-action\" cx=\"7\" cy=\"21\" r=\"2.5\"/><path class=\"icon-action\" d=\"M3 16h8\"/>",
          "note": "Simplified silhouette and object/action roles; 16/24/32 px study."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "cc9a78ea270625e0354466d037e8a69761181167777b8263d5019eddfd2771d8",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" d=\"M7 11V5h20v22H7v-6\"/><circle class=\"icon-action\" cx=\"7\" cy=\"11\" r=\"2.5\"/><circle class=\"icon-action\" cx=\"7\" cy=\"21\" r=\"2.5\"/><path class=\"icon-action\" d=\"M3 16h8\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s11",
      "requirementId": "S11",
      "moduleId": "arqo.weld",
      "host": "sketchup",
      "version": "0.2.0",
      "implementationStatus": "in-development",
      "category": "repair",
      "locales": {
        "en": {
          "name": "Weld+",
          "summary": "Join compatible connected edges into curves.",
          "description": "Join edges into a curve or a set of curves."
        },
        "tr": {
          "name": "Weld+",
          "summary": "Parçalı kenarlardan tek bir eğri.",
          "description": "Kenarları eğri veya eğri grubu olarak birleştirme."
        }
      },
      "license": {
        "sku": "arqo.tool.s11",
        "entitlement": "arqo.tool.s11"
      },
      "commands": [
        {
          "id": "arqo.weld",
          "entitlement": "arqo.tool.s11"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "a4482dc40ed9ff4b1bfa23d4d347d14689ed8f844167d19cb4f582429255fff8"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Simplified silhouette and object/action roles; 16/24/32 px study.",
            "sha256": "f715f50927cff5b5a5b4ce66bddffc712a9a43f0d1480f62208b9a437a94161f"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "1d86366f532569e507b2469b0b752a6c9183dccd002ce35f200de523a7daabe0"
          }
        ]
      },
      "baselineCapabilities": [
        "Kenarları curve veya curve group olarak birleştirme."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/weld/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "a4482dc40ed9ff4b1bfa23d4d347d14689ed8f844167d19cb4f582429255fff8",
          "strokeWidth": 1.45,
          "body": "<path d=\"m3 24 9-10 8 4L29 7\"/><circle cx=\"12\" cy=\"14\" r=\"2.5\"/><circle cx=\"20\" cy=\"18\" r=\"2.5\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "f715f50927cff5b5a5b4ce66bddffc712a9a43f0d1480f62208b9a437a94161f",
          "strokeWidth": 2.5,
          "body": "<path class=\"icon-object\" d=\"m4 25 7-13 9 7 8-14\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"11\" cy=\"12\" r=\"2.75\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"20\" cy=\"19\" r=\"2.75\"/>",
          "note": "Simplified silhouette and object/action roles; 16/24/32 px study."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "1d86366f532569e507b2469b0b752a6c9183dccd002ce35f200de523a7daabe0",
          "strokeWidth": 2.5,
          "body": "<path class=\"icon-blue\" d=\"m4 25 7-13 9 7 8-14\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"11\" cy=\"12\" r=\"2.75\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"20\" cy=\"19\" r=\"2.75\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s12",
      "requirementId": "S12",
      "moduleId": "arqo.curve_to_arc",
      "host": "sketchup",
      "version": "0.2.0",
      "implementationStatus": "in-development",
      "category": "repair",
      "locales": {
        "en": {
          "name": "Curve to Arc",
          "summary": "Turn chains of edges on a circle into real arcs and circles.",
          "description": "Chains of short edges that lie on a circle, as arcs come in from CAD, become SketchUp arcs and circles with a centre and a radius again, same segments, faces rebuilt. Chains off a circle are left alone."
        },
        "tr": {
          "name": "Curve to Arc",
          "summary": "Daire üstündeki kenar zincirlerini gerçek yaya çevir.",
          "description": "CAD'den gelen yaylar gibi daire üstünde duran kısa kenar zincirleri yeniden merkezi ve yarıçapı olan SketchUp yayı ve dairesi olur; parça sayısı aynı, yüzeyler yeniden kurulur. Daire üstünde olmayan zincirlere dokunulmaz."
        }
      },
      "license": {
        "sku": "arqo.tool.s12",
        "entitlement": "arqo.tool.s12"
      },
      "commands": [
        {
          "id": "arqo.curve_to_arc",
          "entitlement": "arqo.tool.s12"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "deviationMm",
          "type": "number",
          "default": 1
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "f4aba83518ac4b26d825fa1cbf47a48ec06bb56df0946b0004e4f1b5d4ede191"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A jagged polyline settling into a smooth accent arc with its centre mark; stroke 2 for 16/24/32 px.",
            "sha256": "e6ae3b9923e74a895aa48bdb6f4b1d50658f6abb603cf87a8a55c5a73f9fb4a4"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "4fd6071296968426496ebf634bdaa25c55a9d004ad9aeb29eee569a61d67e9cb"
          }
        ]
      },
      "baselineCapabilities": [
        "Eğriyi arc veya circle'a dönüştürme."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/curve-to-arc/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "f4aba83518ac4b26d825fa1cbf47a48ec06bb56df0946b0004e4f1b5d4ede191",
          "strokeWidth": 1.45,
          "body": "<path d=\"M4 25C4 6 24 3 28 14M4 25l3-7 5-6 7-3 7 2\"/><path d=\"M24 14h4v-4\"/><circle cx=\"4\" cy=\"25\" r=\"1.8\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "e6ae3b9923e74a895aa48bdb6f4b1d50658f6abb603cf87a8a55c5a73f9fb4a4",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" d=\"M4 26l4-9 5-6 6-4 7-2\" stroke-dasharray=\"3 2\"/><path class=\"icon-action\" d=\"M4 26A22 22 0 0 1 26 4\"/><path class=\"icon-action\" d=\"M26 26h-4m2-2v4\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"26\" cy=\"26\" r=\"1.5\"/>",
          "note": "A jagged polyline settling into a smooth accent arc with its centre mark; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "4fd6071296968426496ebf634bdaa25c55a9d004ad9aeb29eee569a61d67e9cb",
          "strokeWidth": 2,
          "body": "<path class=\"icon-green\" d=\"M4 26l4-9 5-6 6-4 7-2\" stroke-dasharray=\"3 2\"/><path class=\"icon-action\" d=\"M4 26A22 22 0 0 1 26 4\"/><path class=\"icon-action\" d=\"M26 26h-4m2-2v4\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"26\" cy=\"26\" r=\"1.5\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s13",
      "requirementId": "S13",
      "moduleId": "arqo.hide_show_lines",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "repair",
      "locales": {
        "en": {
          "name": "Hide / Show Lines",
          "summary": "Control edge visibility in selected geometry.",
          "description": "Hide or show edges; hide the intersection lines between objects."
        },
        "tr": {
          "name": "Hide / Show Lines",
          "summary": "Gereksiz çizgileri görünümden kaldır.",
          "description": "Kenarları gizleme/gösterme; nesnelerin kesişim çizgilerini gizleme."
        }
      },
      "license": {
        "sku": "arqo.tool.s13",
        "entitlement": "arqo.tool.s13"
      },
      "commands": [
        {
          "id": "arqo.hide_show_lines",
          "entitlement": "arqo.tool.s13"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "62cee52bb9c0eaedceae3f5b2d8300182c2fd62b2967da5733c405a34bbd7ef5"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "15e26225d410d3e56f1b956a2a9491175a0dd512c9cd885e1767acbdaaaa52aa"
          }
        ]
      },
      "baselineCapabilities": [
        "Kenarları gizleme/gösterme; nesnelerin kesişim çizgilerini gizleme."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/hide-show-lines/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "62cee52bb9c0eaedceae3f5b2d8300182c2fd62b2967da5733c405a34bbd7ef5",
          "strokeWidth": 1.45,
          "body": "<path d=\"M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z\"/><circle cx=\"16\" cy=\"16\" r=\"4\"/><path d=\"m5 28 22-24\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "15e26225d410d3e56f1b956a2a9491175a0dd512c9cd885e1767acbdaaaa52aa",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" d=\"M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z\"/><circle class=\"icon-blue\" cx=\"16\" cy=\"16\" r=\"4\"/><path class=\"icon-action\" d=\"m5 28 22-24\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s14",
      "requirementId": "S14",
      "moduleId": "arqo.mirror",
      "host": "sketchup",
      "version": "0.4.1",
      "implementationStatus": "in-development",
      "category": "transform",
      "locales": {
        "en": {
          "name": "Mirror+",
          "summary": "Mirror selected objects about a reference plane.",
          "description": "Mirror across two clicked points, a clicked face (Tab) or the plane through the selection's centre square to X, Y or Z (arrows or the card); as a copy that keeps every setting and attribute, or in place (Ctrl)."
        },
        "tr": {
          "name": "Mirror+",
          "summary": "Dengeli formlar, hızlı yansımalar.",
          "description": "İki tıkla, tıklanan bir yüze (Tab) ya da seçimin ortasından X, Y veya Z'ye dik düzleme (oklar ya da kart) göre aynala; bütün ayar ve özelliklerini taşıyan kopya olarak ya da yerinde (Ctrl)."
        }
      },
      "license": {
        "sku": "arqo.tool.s14",
        "entitlement": "arqo.tool.s14"
      },
      "commands": [
        {
          "id": "arqo.mirror",
          "entitlement": "arqo.tool.s14"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 3,
      "settings": [
        {
          "id": "mode",
          "type": "string",
          "default": "copy"
        },
        {
          "id": "axes",
          "type": "string",
          "default": "world"
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        },
        {
          "from": 2,
          "to": 3,
          "plan": "migration-2-3.md"
        },
        {
          "from": 1,
          "to": 3,
          "plan": "migration-1-3.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "e501e117d97be7fce3a8248dacedbbf88e38925205d00fd04184b490ac35e3fd"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Simplified silhouette and object/action roles; 16/24/32 px study.",
            "sha256": "21c09843a8d77dab3cbff5317da86c7df0592595efe6e50abc3d2938ef066c99"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "3447bc7f2dfbe3fa2568b098e7a302e28ac50026e96119acbac2d76b86214078"
          }
        ]
      },
      "baselineCapabilities": [
        "Tek tık aynalama, kopyalı aynalama, 45°/eksen yakalama."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/mirror/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "e501e117d97be7fce3a8248dacedbbf88e38925205d00fd04184b490ac35e3fd",
          "strokeWidth": 1.45,
          "body": "<path d=\"M16 3v4m0 4v3m0 4v3m0 4v4M12 8 3 24h9Zm8 0 9 16h-9Z\"/><path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"m20 8 9 16h-9Z\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "21c09843a8d77dab3cbff5317da86c7df0592595efe6e50abc3d2938ef066c99",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"m4 25 8-18v18Z\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".2\" d=\"m20 7 8 18h-8Z\"/><path class=\"icon-object\" stroke-dasharray=\"3 4\" d=\"M16 4v24\"/>",
          "note": "Simplified silhouette and object/action roles; 16/24/32 px study."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "3447bc7f2dfbe3fa2568b098e7a302e28ac50026e96119acbac2d76b86214078",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"m4 25 8-18v18Z\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".35\" d=\"m20 7 8 18h-8Z\"/><path class=\"icon-green\" stroke-dasharray=\"3 4\" d=\"M16 4v24\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s15",
      "requirementId": "S15",
      "moduleId": "arqo.align",
      "host": "sketchup",
      "version": "0.4.1",
      "implementationStatus": "in-development",
      "category": "transform",
      "locales": {
        "en": {
          "name": "Align+",
          "summary": "Align objects using reference geometry.",
          "description": "Line objects up or space them evenly: Tab or a typed mode, a live preview, and hover an object to align to it."
        },
        "tr": {
          "name": "Align+",
          "summary": "Her nesne tam olması gereken yerde.",
          "description": "Nesneleri hizala ya da eşit aralıkla dağıt: Tab veya yazılan mod, canlı önizleme; bir nesnenin üzerine gel, ona hizala."
        }
      },
      "license": {
        "sku": "arqo.tool.s15",
        "entitlement": "arqo.tool.s15"
      },
      "commands": [
        {
          "id": "arqo.align",
          "entitlement": "arqo.tool.s15"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "mode",
          "type": "string",
          "default": "left"
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "bcde8896f07fb4575f6c13656eb789155095eca8edea92025ffd69efce0ce945"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Three objects of different length on one shared edge; replaces the bar chart reading of v1.",
            "sha256": "ccb8116a02aac30a6a098b1585eb3b8a7db694552cae4c02afbf61b4aaf5e3c8"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "1b26722518a0e4e623689fb4208811a347122e1035b06940f13aabcc7cdaa271"
          }
        ]
      },
      "baselineCapabilities": [
        "Seçili nesneleri hizalama."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/align/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "bcde8896f07fb4575f6c13656eb789155095eca8edea92025ffd69efce0ce945",
          "strokeWidth": 1.45,
          "body": "<path d=\"M4 27h24M7 5h6v15H7Zm13 7h6v8h-6ZM10 21v3m13-3v3\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "ccb8116a02aac30a6a098b1585eb3b8a7db694552cae4c02afbf61b4aaf5e3c8",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"M9 6h16v5H9Zm0 7.5h10v5H9ZM9 21h19v5H9Z\"/><path class=\"icon-action\" d=\"M5 3v26\"/>",
          "note": "Three objects of different length on one shared edge; replaces the bar chart reading of v1."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "1b26722518a0e4e623689fb4208811a347122e1035b06940f13aabcc7cdaa271",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"M9 6h16v5H9Zm0 7.5h10v5H9ZM9 21h19v5H9Z\"/><path class=\"icon-action\" d=\"M5 3v26\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s16",
      "requirementId": "S16",
      "moduleId": "arqo.reference_scale",
      "host": "sketchup",
      "version": "0.3.0",
      "implementationStatus": "in-development",
      "category": "transform",
      "locales": {
        "en": {
          "name": "Reference Scale",
          "summary": "Click two points, type the distance they should be apart.",
          "description": "The two-point way into Smart Scale: click two points on the selection, type the distance they should have, and everything is scaled about the first point. For imported drawings and models of unknown scale."
        },
        "tr": {
          "name": "Reference Scale",
          "summary": "İki nokta tıkla, aralarındaki mesafeyi yaz.",
          "description": "Smart Scale'in iki nokta yolu: seçimde iki nokta tıkla, olması gereken mesafeyi yaz; her şey ilk noktaya göre ölçeklenir. Ölçeği bilinmeyen içe alınmış çizim ve modeller için."
        }
      },
      "license": {
        "sku": "arqo.tool.s16",
        "entitlement": "arqo.tool.s16"
      },
      "commands": [
        {
          "id": "arqo.reference_scale",
          "entitlement": "arqo.tool.s16"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "0bb0f8e955e923a039f9b0d6adc9d80f5e55d188f8b72212564121ef9e2eb0ac"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Two picked points joined by an accent dimension line over a faint shape: this distance becomes a typed length; stroke 2 for 16/24/32 px.",
            "sha256": "b3b59ac8482e8bbb70af25c6ef9938a6dafd5fbda24fffd3c0ef07535d5ed558"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "1944d6984b883feb267fbc928a1e6575e647a187487760c812f31033b0f95182"
          }
        ]
      },
      "baselineCapabilities": [
        "Edge, face, group ve component için referans noktalarıyla ölçek."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/reference-scale/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "0bb0f8e955e923a039f9b0d6adc9d80f5e55d188f8b72212564121ef9e2eb0ac",
          "strokeWidth": 1.45,
          "body": "<path d=\"M5 17h10v10H5ZM18 4h10v10M28 4 16 16M6 9V5h4\"/><path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"M5 17h10v10H5Z\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "b3b59ac8482e8bbb70af25c6ef9938a6dafd5fbda24fffd3c0ef07535d5ed558",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"M4 24 10 9h14l4 15Z\"/><path class=\"icon-action\" d=\"M7 5h18M7 3v4m18-4v4\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"7\" cy=\"5\" r=\"2.5\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"25\" cy=\"5\" r=\"2.5\"/>",
          "note": "Two picked points joined by an accent dimension line over a faint shape: this distance becomes a typed length; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "1944d6984b883feb267fbc928a1e6575e647a187487760c812f31033b0f95182",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"M4 24 10 9h14l4 15Z\"/><path class=\"icon-action\" d=\"M7 5h18M7 3v4m18-4v4\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"7\" cy=\"5\" r=\"2.5\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"25\" cy=\"5\" r=\"2.5\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s17",
      "requirementId": "S17",
      "moduleId": "arqo.axis_length_scale",
      "host": "sketchup",
      "version": "0.4.3",
      "implementationStatus": "in-development",
      "category": "transform",
      "locales": {
        "en": {
          "name": "Smart Scale",
          "summary": "Scale by measurement: type the size, keep what matters.",
          "description": "See the selection's width, depth and height in model units and type the targets; choose the anchor; scale, or stretch so height and thickness stay and nested components keep their size; this copy or every copy; two points to a distance, match another object, drag along an axis, reset and bake the scale."
        },
        "tr": {
          "name": "Smart Scale",
          "summary": "Ölçüye göre ölçekle: boyutu yaz, önemli olanı koru.",
          "description": "Seçimin genişlik, derinlik ve yüksekliğini model biriminde gör, hedefleri yaz; sabit noktayı seç; ölçekle ya da esnet (yükseklik ve kalınlık korunur, iç bileşenler büyümez); bu kopya ya da tüm kopyalar; iki nokta arası mesafe, başka nesneye eşleme, eksende sürükleme, ölçeği sıfırlama ve tanıma işleme."
        }
      },
      "license": {
        "sku": "arqo.tool.s17",
        "entitlement": "arqo.tool.s17"
      },
      "commands": [
        {
          "id": "arqo.axis_length_scale",
          "entitlement": "arqo.tool.s17"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry",
        "units"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "last",
          "type": "string",
          "default": "{}",
          "panel": true
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v4.svg",
        "revision": 4,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "eba5c26945e227603234300ef4a21783dd8430ef8fd080ccaeac77d955bc62f8"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A box with one side pulled out along an accent arrow, the opposite edge marked as the end that stays; stroke 2 for 16/24/32 px.",
            "sha256": "f06b068a211678593bd333c684e070d5121714da6511f08eebe8a0a8959bd6f6"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "A box with its target outline in the accent and a measured dimension line above: scale by measurement; stroke 2 for 16/24/32 px.",
            "sha256": "c0a66ede87ac795b6f6a9611b9a1efeef889320b7c1ca2394f5992168ffad2cc"
          },
          {
            "revision": 4,
            "file": "icons/v4.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "2c6aa9754cbbf36206c810e6a4f6deb87d589bc8f7f4dd7363c9c6ffc469a7d3"
          }
        ]
      },
      "baselineCapabilities": [
        "Ölçüye göre W/D/H ölçekleme, orantı kilidi, 9+3 sabit nokta, esnetme (kalınlık korunur), iç bileşen koruma, bu kopya/tüm kopyalar, iki nokta, eşleme, eksende sürükleme, sıfırlama, tanıma işleme."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/axis-length-scale/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "eba5c26945e227603234300ef4a21783dd8430ef8fd080ccaeac77d955bc62f8",
          "strokeWidth": 1.45,
          "body": "<path d=\"M8 10h16v14H8ZM4 4h24M4 2v4m24-4v4M28 10v14m-2-14h4m-4 14h4M8 28h16\"/><path d=\"m10 17 3-3m-3 3 3 3m9-3-3-3m3 3-3 3\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "f06b068a211678593bd333c684e070d5121714da6511f08eebe8a0a8959bd6f6",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"M5 10h10v12H5Z\"/><path class=\"icon-action\" d=\"M15 10h5v12h-5\" stroke-dasharray=\"2 2\"/><path class=\"icon-action\" d=\"M15 16h13m-3-3 3 3-3 3\"/><path class=\"icon-object\" d=\"M5 7v18\"/>",
          "note": "A box with one side pulled out along an accent arrow, the opposite edge marked as the end that stays; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "c0a66ede87ac795b6f6a9611b9a1efeef889320b7c1ca2394f5992168ffad2cc",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"M5 14h12v12H5Z\"/><path class=\"icon-action\" d=\"M5 10h22v16H17\" stroke-dasharray=\"2 2\"/><path class=\"icon-action\" d=\"M5 5h22M5 3v4m22-4v4\"/><path class=\"icon-action\" d=\"m14 18 3 3\"/>",
          "note": "A box with its target outline in the accent and a measured dimension line above: scale by measurement; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 4,
          "file": "icons/v4.svg",
          "sha256": "2c6aa9754cbbf36206c810e6a4f6deb87d589bc8f7f4dd7363c9c6ffc469a7d3",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"M5 14h12v12H5Z\"/><path class=\"icon-action\" d=\"M5 10h22v16H17\" stroke-dasharray=\"2 2\"/><path class=\"icon-action\" d=\"M5 5h22M5 3v4m22-4v4\"/><path class=\"icon-action\" d=\"m14 18 3 3\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s18",
      "requirementId": "S18",
      "moduleId": "arqo.scale_definition",
      "host": "sketchup",
      "version": "0.3.1",
      "implementationStatus": "in-development",
      "category": "transform",
      "locales": {
        "en": {
          "name": "Scale Definition",
          "summary": "Bake an instance's scale into its definition.",
          "description": "The selected groups' and components' scale goes into their definitions; every other copy keeps its size. Reported in the Smart Scale panel."
        },
        "tr": {
          "name": "Scale Definition",
          "summary": "Kopyanın ölçeğini tanımına işle.",
          "description": "Seçili grup ve bileşenlerin ölçeği tanımlarına işlenir; diğer kopyalar boyutunu korur. Sonuç Smart Scale panelinde görünür."
        }
      },
      "license": {
        "sku": "arqo.tool.s18",
        "entitlement": "arqo.tool.s18"
      },
      "commands": [
        {
          "id": "arqo.scale_definition",
          "entitlement": "arqo.tool.s18"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "09dfe8e1be30368c8b1d0de0f890c2c6b71754eec5b80b867d90d855408dba0e"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A stretched box settling into a square definition mark in the accent: the scale becomes the definition; stroke 2 for 16/24/32 px.",
            "sha256": "4e0707dd5dd4d86f5af2fa764972ad58242b408008320352cb0cb1dde9a97ea7"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "c75562c63fd01bdc9538f63a15528527ecfabc22e1c216b5ced02f48e1afc742"
          }
        ]
      },
      "baselineCapabilities": [
        "Group/component definition ölçeğini düzenleme; sağ tık erişimi."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/scale-definition/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "09dfe8e1be30368c8b1d0de0f890c2c6b71754eec5b80b867d90d855408dba0e",
          "strokeWidth": 1.45,
          "body": "<path d=\"m16 4 10 6v12l-10 6-10-6V10Z M6 10l10 6 10-6M16 16v12\"/><path d=\"m1 10 4-4m0 0H1m4 0v4M31 22l-4 4m0 0h4m-4 0v-4\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "4e0707dd5dd4d86f5af2fa764972ad58242b408008320352cb0cb1dde9a97ea7",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" d=\"M3 8h20v8H3Z\" stroke-dasharray=\"2 2\"/><path class=\"icon-action\" d=\"M13 16v4m-2-2 2 2 2-2\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"8\" y=\"21\" width=\"10\" height=\"8\" rx=\"1.5\"/><path class=\"icon-action\" d=\"M26 10v4m-2-2h4\"/>",
          "note": "A stretched box settling into a square definition mark in the accent: the scale becomes the definition; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "c75562c63fd01bdc9538f63a15528527ecfabc22e1c216b5ced02f48e1afc742",
          "strokeWidth": 2,
          "body": "<path class=\"icon-green\" d=\"M3 8h20v8H3Z\" stroke-dasharray=\"2 2\"/><path class=\"icon-action\" d=\"M13 16v4m-2-2 2 2 2-2\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"8\" y=\"21\" width=\"10\" height=\"8\" rx=\"1.5\"/><path class=\"icon-action\" d=\"M26 10v4m-2-2h4\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s19",
      "requirementId": "S19",
      "moduleId": "arqo.transformer",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "transform",
      "locales": {
        "en": {
          "name": "Transformer",
          "summary": "Transform objects using controlled move, rotate and scale inputs.",
          "description": "Scale, move, rotate and colour groups and components."
        },
        "tr": {
          "name": "Transformer",
          "summary": "Taşı, döndür, ölçekle, renklendir.",
          "description": "Grup ve bileşenlerde ölçek, taşıma, döndürme ve renk işlemleri."
        }
      },
      "license": {
        "sku": "arqo.tool.s19",
        "entitlement": "arqo.tool.s19"
      },
      "commands": [
        {
          "id": "arqo.transformer",
          "entitlement": "arqo.tool.s19"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "4a8e1d7e91b819c5c98595f2a6aec08afb1d01035ba850c7a3fb2771d5dbc8dc"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "b6fd752ab1e939e0c290c12d2b22d6fdffc770bfe20c8225d200f8700c9f4bd1"
          }
        ]
      },
      "baselineCapabilities": [
        "Group/component için ölçek, taşıma, döndürme ve renk."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/transformer/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "4a8e1d7e91b819c5c98595f2a6aec08afb1d01035ba850c7a3fb2771d5dbc8dc",
          "strokeWidth": 1.45,
          "body": "<path d=\"M16 3v26M3 16h26M12 7l4-4 4 4M12 25l4 4 4-4M7 12l-4 4 4 4m18-8 4 4-4 4\"/><circle cx=\"16\" cy=\"16\" r=\"5\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "b6fd752ab1e939e0c290c12d2b22d6fdffc770bfe20c8225d200f8700c9f4bd1",
          "strokeWidth": 2,
          "body": "<path class=\"icon-green\" d=\"M16 3v26M3 16h26\"/><path class=\"icon-action\" d=\"M12 7l4-4 4 4M12 25l4 4 4-4M7 12l-4 4 4 4M25 12l4 4-4 4\"/><circle class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" cx=\"16\" cy=\"16\" r=\"5\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s20",
      "requirementId": "S20",
      "moduleId": "arqo.reset_axis",
      "host": "sketchup",
      "version": "0.3.0",
      "implementationStatus": "in-development",
      "category": "geometry",
      "locales": {
        "en": {
          "name": "Reset Axis+",
          "summary": "Reset object axes while preserving geometry placement.",
          "description": "Put a group's or component's axes back on its geometry: X on the longest edge, origin at the lower corner; nothing moves in the model."
        },
        "tr": {
          "name": "Reset Axis+",
          "summary": "Nesnelerin için doğru başlangıç.",
          "description": "Grup veya bileşenin eksenini geometrisine oturtur: X en uzun kenara, orijin alt köşeye; modelde hiçbir şey kıpırdamaz."
        }
      },
      "license": {
        "sku": "arqo.tool.s20",
        "entitlement": "arqo.tool.s20"
      },
      "commands": [
        {
          "id": "arqo.reset_axis",
          "entitlement": "arqo.tool.s20"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "10be575768166e87a65b4af7048b83ab322ce647db395e4147d506d0dcaad4bf"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Rotated object with its new X/Y axes on the long edge and the origin at the corner; 16/24/32 px study.",
            "sha256": "f87fa7ef0d507ddb51e2aba89032c21ea9bbba3b0509af59c6ad3d9f89a2e2ef"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "9d6a22ec5595c6c8d0214b08a5d9d28787434345942214a17eb40ae5a71473e9"
          }
        ]
      },
      "baselineCapabilities": [
        "Orijin/eksen sıfırlama; X eksenini yakın, uzun veya kısa kenara uydurma."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/reset-axis/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "10be575768166e87a65b4af7048b83ab322ce647db395e4147d506d0dcaad4bf",
          "strokeWidth": 1.45,
          "body": "<path d=\"M10 23V5m0 18h18m-18 0 12-10M7 8l3-3 3 3m12 12 3 3-3 3M19 13h3v3\"/><circle cx=\"10\" cy=\"23\" r=\"3\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "f87fa7ef0d507ddb51e2aba89032c21ea9bbba3b0509af59c6ad3d9f89a2e2ef",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"M6 21 21 13.5l3 6L9 27Z\"/><path class=\"icon-action\" d=\"M6 21 27 10.5m-4.6-.9 4.6.9-1.9 4.3M6 21 3 15\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"6\" cy=\"21\" r=\"2.5\"/>",
          "note": "Rotated object with its new X/Y axes on the long edge and the origin at the corner; 16/24/32 px study."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "9d6a22ec5595c6c8d0214b08a5d9d28787434345942214a17eb40ae5a71473e9",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"M6 21 21 13.5l3 6L9 27Z\"/><path class=\"icon-action\" d=\"M6 21 27 10.5m-4.6-.9 4.6.9-1.9 4.3M6 21 3 15\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"6\" cy=\"21\" r=\"2.5\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s21",
      "requirementId": "S21",
      "moduleId": "arqo.smart_slice",
      "host": "sketchup",
      "version": "0.3.2",
      "implementationStatus": "in-development",
      "category": "cut",
      "locales": {
        "en": {
          "name": "Smart Slice",
          "summary": "Slice geometry using a reference cutting plane.",
          "description": "Slice, cut or detach groups and components with a plane from two or three points, a face, an edge (perpendicular) or a typed height; the cut is closed with a section face."
        },
        "tr": {
          "name": "Smart Slice",
          "summary": "Geometriye yeni bir kesit aç.",
          "description": "Grup ve bileşenleri iki/üç nokta, yüzey, kenara dik düzlem ya da yazılan yükseklikle böl, kes veya ayır; kesit yüzeyle kapanır."
        }
      },
      "license": {
        "sku": "arqo.tool.s21",
        "entitlement": "arqo.tool.s21"
      },
      "commands": [
        {
          "id": "arqo.smart_slice",
          "entitlement": "arqo.tool.s21"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "mode",
          "type": "string",
          "default": "slice"
        },
        {
          "id": "detachGapMm",
          "type": "number",
          "default": 300
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "a6760a3e01cb9c583756515bf0c6adfc80ba0e03bc2ad2bcd85552962edf6d09"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Simplified silhouette and object/action roles; 16/24/32 px study.",
            "sha256": "0a620e7b8fa4a2d6e469d6521804889e4e2eeb1c7146764c697babe6d5cd5b89"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "01e0a428c990e1196a1f47d9398afe4e4ad8de4b910fdf5a9277ad4519c8cd0c"
          }
        ]
      },
      "baselineCapabilities": [
        "Slice/Cut/Detach; iki/üç nokta, kenar, yüzey ve dik düzlem; kesit yüzeyi ekleme."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/smart-slice/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "a6760a3e01cb9c583756515bf0c6adfc80ba0e03bc2ad2bcd85552962edf6d09",
          "strokeWidth": 1.45,
          "body": "<path d=\"m16 4 11 6v13l-11 6-11-6V10Z M5 10l11 6 11-6M16 16v13\"/><path d=\"M1 19 21 9l10 5L11 25Z\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "0a620e7b8fa4a2d6e469d6521804889e4e2eeb1c7146764c697babe6d5cd5b89",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".08\" d=\"M5 20V5h22v6Z\"/><path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".08\" d=\"m5 25 22-9v11H5Z\"/><path class=\"icon-action\" stroke-width=\"2.5\" d=\"m3 24 26-11\"/>",
          "note": "Simplified silhouette and object/action roles; 16/24/32 px study."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "01e0a428c990e1196a1f47d9398afe4e4ad8de4b910fdf5a9277ad4519c8cd0c",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"M5 20V5h22v6Z\"/><path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"m5 25 22-9v11H5Z\"/><path class=\"icon-action\" stroke-width=\"2.5\" d=\"m3 24 26-11\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s22",
      "requirementId": "S22",
      "moduleId": "arqo.multi_slice",
      "host": "sketchup",
      "version": "0.3.1",
      "implementationStatus": "in-development",
      "category": "cut",
      "locales": {
        "en": {
          "name": "Multi Slice",
          "summary": "Many parallel cuts in one go: equal parts or a spacing.",
          "description": "Planes square to X, Y or Z (arrow keys): click the first plane and the spacing, or type x4 for equal parts or 300mm for a spacing; slice or detach; every plane previewed, the pieces of one plane cut by the next. On Smart Slice's engine."
        },
        "tr": {
          "name": "Multi Slice",
          "summary": "Tek seferde çok paralel kesim: eşit parça ya da aralık.",
          "description": "X, Y ya da Z'ye dik düzlemler (ok tuşları): ilk düzlemi ve aralığı tıkla, ya da x4 (eşit parça) veya 300mm (aralık) yaz; böl ya da ayır; her düzlem önizlenir, bir düzlemin parçalarını sonraki keser. Smart Slice çekirdeğiyle."
        }
      },
      "license": {
        "sku": "arqo.tool.s22",
        "entitlement": "arqo.tool.s22"
      },
      "commands": [
        {
          "id": "arqo.multi_slice",
          "entitlement": "arqo.tool.s22"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "mode",
          "type": "string",
          "default": "slice"
        },
        {
          "id": "detachGapMm",
          "type": "number",
          "default": 300
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "bdd5adc9412aec82e76d722007b1674f547be5debb3de04bc1e53699851b25b8"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A block crossed by three parallel accent planes, the middle one filled; stroke 2 for 16/24/32 px.",
            "sha256": "a6da4568e08fe582d638a603c70ec64b897dcaa18d712ed4b7d0144ea07c48c0"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "be8a4a955d32c93636049a3f2f8a8fb100e0080e6216252e3c278d137a78a5d3"
          }
        ]
      },
      "baselineCapabilities": [
        "Seçili nesnelerde toplu Slice/Cut/Detach."
      ],
      "acceptanceProfile": "sketchup-standard",
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "manifestPath": "tools/multi-slice/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "bdd5adc9412aec82e76d722007b1674f547be5debb3de04bc1e53699851b25b8",
          "strokeWidth": 1.45,
          "body": "<path d=\"m10 5 16 7v16l-16-7ZM2 12l16-7M2 19l24-12M2 26l24-12\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "a6da4568e08fe582d638a603c70ec64b897dcaa18d712ed4b7d0144ea07c48c0",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"M6 10h20v16H6Z\"/><path class=\"icon-action\" d=\"M4 14h24M4 22h24\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"M3 17h26v2H3Z\"/><path class=\"icon-object\" d=\"M6 10l4-5h20l-4 5\"/>",
          "note": "A block crossed by three parallel accent planes, the middle one filled; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "be8a4a955d32c93636049a3f2f8a8fb100e0080e6216252e3c278d137a78a5d3",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"M6 10h20v16H6Z\"/><path class=\"icon-action\" d=\"M4 14h24M4 22h24\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"M3 17h26v2H3Z\"/><path class=\"icon-object\" d=\"M6 10l4-5h20l-4 5\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s23",
      "requirementId": "S23",
      "moduleId": "arqo.explode",
      "host": "sketchup",
      "version": "0.4.0",
      "implementationStatus": "in-development",
      "category": "components",
      "locales": {
        "en": {
          "name": "Explode",
          "summary": "Explode selected grouped geometry.",
          "description": "Explode groups and components through every nesting level in one step, or flatten only what is nested inside them; images become textured faces and, if asked, curves become plain edges. Locked containers are kept."
        },
        "tr": {
          "name": "Explode",
          "summary": "İç içe yapıları parçalarına ayır.",
          "description": "Grup ve bileşenleri tüm iç içe seviyeleriyle tek adımda patlatır ya da yalnız içlerindekileri düzleştirir; görseller dokulu yüzeye, istenirse eğriler düz kenara döner. Kilitliler korunur."
        }
      },
      "license": {
        "sku": "arqo.tool.s23",
        "entitlement": "arqo.tool.s23"
      },
      "commands": [
        {
          "id": "arqo.explode",
          "entitlement": "arqo.tool.s23"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 3,
      "settings": [
        {
          "id": "scope",
          "type": "string",
          "default": "deep",
          "options": [
            "deep",
            "inside",
            "one"
          ]
        },
        {
          "id": "curves",
          "type": "string",
          "default": "keep",
          "options": [
            "keep",
            "explode"
          ]
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        },
        {
          "from": 2,
          "to": 3,
          "plan": "migration-2-3.md"
        },
        {
          "from": 1,
          "to": 3,
          "plan": "migration-1-3.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "8e448841f9435301eb08265608c5d375883a508d54de4ba0bfdf3f25966253ac"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A small box with four corner arrows pointing out in the accent: what was grouped comes apart; stroke 2 for 16/24/32 px.",
            "sha256": "0ed7531068aa896fe2c4897e3bcca8ace7601cff7e7f79e107bc8ae385559d8f"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "0eec6e1f79e825d444c629c167766857652e2c1ca008ccf2883b723b8efef26f"
          }
        ]
      },
      "baselineCapabilities": [
        "Group, component, curve ve image yapılarını iç/dış bağlamda patlatma."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/explode/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "8e448841f9435301eb08265608c5d375883a508d54de4ba0bfdf3f25966253ac",
          "strokeWidth": 1.45,
          "body": "<path d=\"m12 12 4-2 4 2v6l-4 2-4-2Zm-6-6 4 4m12 12 4 4M6 26l4-4M22 10l4-4M3 7V3h4m18 0h4v4M3 25v4h4m18 0h4v-4\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "0ed7531068aa896fe2c4897e3bcca8ace7601cff7e7f79e107bc8ae385559d8f",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"m16 10.5 5.5 3v6L16 22.5l-5.5-3v-6Z\"/><path class=\"icon-object\" d=\"M10.5 13.5 16 16.5l5.5-3M16 16.5v6\"/><path class=\"icon-action\" d=\"M8 8 4 4m0 4V4h4m16 4 4-4m-4 0h4v4M8 24l-4 4m0-4v4h4m16-4 4 4m-4 0h4v-4\"/>",
          "note": "A small box with four corner arrows pointing out in the accent: what was grouped comes apart; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "0eec6e1f79e825d444c629c167766857652e2c1ca008ccf2883b723b8efef26f",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"m16 10.5 5.5 3v6L16 22.5l-5.5-3v-6Z\"/><path class=\"icon-object\" d=\"M10.5 13.5 16 16.5l5.5-3M16 16.5v6\"/><path class=\"icon-action\" d=\"M8 8 4 4m0 4V4h4m16 4 4-4m-4 0h4v4M8 24l-4 4m0-4v4h4m16-4 4 4m-4 0h4v-4\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s24",
      "requirementId": "S24",
      "moduleId": "arqo.smart_select",
      "host": "sketchup",
      "version": "0.3.1",
      "implementationStatus": "in-development",
      "category": "selection",
      "locales": {
        "en": {
          "name": "Smart Select",
          "summary": "Select entities using reusable type and similarity filters.",
          "description": "Select everything in the current context that is like the reference: same component, definition family, material, size, shape, tag, axis or inside its bounding box. Criteria combine, sets of them are saved and reused."
        },
        "tr": {
          "name": "Smart Select",
          "summary": "Aradığın geometriyi kolayca bul.",
          "description": "Referansa benzeyen her şeyi seçer: aynı bileşen, tanım ailesi, malzeme, ölçü, biçim, etiket, eksen ya da sınır kutusunun içinde. Ölçütler birleşir, setler kaydedilip yeniden kullanılır."
        }
      },
      "license": {
        "sku": "arqo.tool.s24",
        "entitlement": "arqo.tool.s24"
      },
      "commands": [
        {
          "id": "arqo.smart_select",
          "entitlement": "arqo.tool.s24"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "last",
          "type": "string",
          "default": "{}",
          "panel": true
        },
        {
          "id": "presets",
          "type": "string",
          "default": "[]",
          "panel": true
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "d0d3f9732c5e0ae634e01c01630b14da305e6fb0722478fe50e78aafd8275f5e"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A solid reference square, two alike squares picked out in the accent and an unlike circle left alone: select what is like the reference; 16/24/32 px study.",
            "sha256": "cd5e3071e37d80bbfcec89d01928f5615c9bc7107c8db892dfa38a590f465e66"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "35c4d555bb1a6c5c504b57bdcbb4c4beba1bdcb5a77b708a8c3d6e67c4441a4a"
          }
        ]
      },
      "baselineCapabilities": [
        "Uzunluk, alan ve diğer seçim ölçütleri; ayrıntılı ölçüt listesi şartnamede takip edilir."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/smart-select/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "d0d3f9732c5e0ae634e01c01630b14da305e6fb0722478fe50e78aafd8275f5e",
          "strokeWidth": 1.45,
          "body": "<path d=\"M5 13V5h8m6 0h8v8m0 6v8h-8m-6 0H5v-8\"/><path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"m12 11 12 7-6 1-3 6Z\"/><path d=\"m12 11 12 7-6 1-3 6Z\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "cd5e3071e37d80bbfcec89d01928f5615c9bc7107c8db892dfa38a590f465e66",
          "strokeWidth": 2,
          "body": "<rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"4\" y=\"4\" width=\"10\" height=\"10\" rx=\"1.5\"/><rect class=\"icon-action\" x=\"19\" y=\"5\" width=\"9\" height=\"9\" rx=\"1.5\"/><rect class=\"icon-action\" x=\"5\" y=\"19\" width=\"9\" height=\"9\" rx=\"1.5\"/><circle class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" cx=\"23.5\" cy=\"23.5\" r=\"4.5\"/>",
          "note": "A solid reference square, two alike squares picked out in the accent and an unlike circle left alone: select what is like the reference; 16/24/32 px study."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "35c4d555bb1a6c5c504b57bdcbb4c4beba1bdcb5a77b708a8c3d6e67c4441a4a",
          "strokeWidth": 2,
          "body": "<rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"4\" y=\"4\" width=\"10\" height=\"10\" rx=\"1.5\"/><rect class=\"icon-action\" x=\"19\" y=\"5\" width=\"9\" height=\"9\" rx=\"1.5\"/><rect class=\"icon-action\" x=\"5\" y=\"19\" width=\"9\" height=\"9\" rx=\"1.5\"/><circle class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" cx=\"23.5\" cy=\"23.5\" r=\"4.5\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s25",
      "requirementId": "S25",
      "moduleId": "arqo.filter_selection",
      "host": "sketchup",
      "version": "0.3.1",
      "implementationStatus": "in-development",
      "category": "selection",
      "locales": {
        "en": {
          "name": "Filter Selection",
          "summary": "Narrow the selection by kind, tag, material and visibility.",
          "description": "See what is selected broken down by kind, face orientation, edge type, tag and material, then keep only what you ticked or take it out. Restore brings back the selection before the last filter."
        },
        "tr": {
          "name": "Filter Selection",
          "summary": "Seçimini türe, etikete ve malzemeye göre daralt.",
          "description": "Seçimin türe, yüzey yönüne, kenar çeşidine, etikete ve malzemeye göre dökümünü görür; işaretlediklerini tutar ya da seçimden çıkarırsın. Önceki seçim düğmesi, son süzmeden önceki seçimi geri getirir."
        }
      },
      "license": {
        "sku": "arqo.tool.s25",
        "entitlement": "arqo.tool.s25"
      },
      "commands": [
        {
          "id": "arqo.filter_selection",
          "entitlement": "arqo.tool.s25"
        }
      ],
      "coreDependencies": [
        "selection"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "last",
          "type": "string",
          "default": "{}",
          "panel": true
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "fb9a355a0dd46aba725ec84007b18af071b823186acc0b22ffed24b12c20d2f7"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A funnel with mixed shapes going in and one kept square coming out in the accent: narrow the selection; stroke 2 for 16/24/32 px.",
            "sha256": "94dc0c35cd1568c17a035f1b7893c20e7d4e5715d110519d2ebb1c12923b0ff9"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "9a85b20890a76c29a7ce19ce22a101083fe232f6b1a0a899f4fc5ec87074d66e"
          }
        ]
      },
      "baselineCapabilities": [
        "Edge, Face, Group, ComponentInstance, ConstructionLine/Point, Dimension, Image, SectionPlane ve Text filtreleri; yüzey yönü, kenar çeşidi, etiket, malzeme ve görünürlük süzgeçleri."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/filter-selection/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "fb9a355a0dd46aba725ec84007b18af071b823186acc0b22ffed24b12c20d2f7",
          "strokeWidth": 1.45,
          "body": "<path d=\"M3 5h26L19 17v8l-6 3V17ZM9 10h14\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "94dc0c35cd1568c17a035f1b7893c20e7d4e5715d110519d2ebb1c12923b0ff9",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"M3 12h18l-7 8v6l-4 2v-8Z\"/><rect class=\"icon-action\" x=\"4\" y=\"3\" width=\"6\" height=\"6\" rx=\"1\"/><circle class=\"icon-object\" cx=\"16\" cy=\"6\" r=\"3\"/><path class=\"icon-action\" d=\"M17 25h3\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"22\" y=\"21\" width=\"7\" height=\"7\" rx=\"1.5\"/>",
          "note": "A funnel with mixed shapes going in and one kept square coming out in the accent: narrow the selection; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "9a85b20890a76c29a7ce19ce22a101083fe232f6b1a0a899f4fc5ec87074d66e",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"M3 12h18l-7 8v6l-4 2v-8Z\"/><rect class=\"icon-action\" x=\"4\" y=\"3\" width=\"6\" height=\"6\" rx=\"1\"/><circle class=\"icon-object\" cx=\"16\" cy=\"6\" r=\"3\"/><path class=\"icon-action\" d=\"M17 25h3\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"22\" y=\"21\" width=\"7\" height=\"7\" rx=\"1.5\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s26",
      "requirementId": "S26",
      "moduleId": "arqo.crop_lasso_select",
      "host": "sketchup",
      "version": "0.3.3",
      "implementationStatus": "in-development",
      "category": "selection",
      "locales": {
        "en": {
          "name": "Crop / Lasso Select",
          "summary": "Select with a lasso or a polygon drawn on the screen.",
          "description": "Drag a lasso or click the corners of a polygon and press Enter; take only what is wholly inside or anything touched (Tab); Shift adds, Ctrl removes. Faces, edges, groups and components of the current context."
        },
        "tr": {
          "name": "Crop / Lasso Select",
          "summary": "Ekrana çizilen kement ya da çokgenle seç.",
          "description": "Kement sürükle ya da çokgenin köşelerini tıklayıp Enter'a bas; yalnız tamamen içeridekileri ya da değdiği her şeyi al (Tab); Shift ekler, Ctrl çıkarır. Etkin bağlamın yüzey, kenar, grup ve bileşenleri."
        }
      },
      "license": {
        "sku": "arqo.tool.s26",
        "entitlement": "arqo.tool.s26"
      },
      "commands": [
        {
          "id": "arqo.crop_lasso_select",
          "entitlement": "arqo.tool.s26"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "7046648f50a0dfe00a223808bd66fec86df85d627e0440b2afe463fb33d781a2"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A free lasso loop in the accent round two small shapes, a third left outside; stroke 2 for 16/24/32 px.",
            "sha256": "baf6c4c931ce13e69b85afea9936da2724d977926b2c59f111c6dc091da46cb1"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "320338f2c21f97a8b19c72b6e5d61d931c2a74aba3696d169cc26ac8a818572f"
          }
        ]
      },
      "baselineCapabilities": [
        "Lasso, polyline, circle ve rectangle; selection state, extend ve reverse side modları."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/crop-lasso-select/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "7046648f50a0dfe00a223808bd66fec86df85d627e0440b2afe463fb33d781a2",
          "strokeWidth": 1.45,
          "body": "<path d=\"M9 5c13-6 23 6 17 15-3 5-13 8-17 4-5-4-4-11-1-15M9 23c-6 4-8 1-5-2 3-3 7 1 3 7\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "baf6c4c931ce13e69b85afea9936da2724d977926b2c59f111c6dc091da46cb1",
          "strokeWidth": 2,
          "body": "<path class=\"icon-action\" d=\"M6 14c-3-6 4-10 9-8 6-3 13 1 11 7 3 5-2 11-8 9-5 3-11-1-12-8Z\" stroke-dasharray=\"3 2\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"10\" y=\"10\" width=\"5\" height=\"5\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"19\" cy=\"14\" r=\"2.5\"/><rect class=\"icon-object\" x=\"23\" y=\"24\" width=\"5\" height=\"5\"/>",
          "note": "A free lasso loop in the accent round two small shapes, a third left outside; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "320338f2c21f97a8b19c72b6e5d61d931c2a74aba3696d169cc26ac8a818572f",
          "strokeWidth": 2,
          "body": "<path class=\"icon-action\" d=\"M6 14c-3-6 4-10 9-8 6-3 13 1 11 7 3 5-2 11-8 9-5 3-11-1-12-8Z\" stroke-dasharray=\"3 2\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"10\" y=\"10\" width=\"5\" height=\"5\"/><circle class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" cx=\"19\" cy=\"14\" r=\"2.5\"/><rect class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" x=\"23\" y=\"24\" width=\"5\" height=\"5\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s27",
      "requirementId": "S27",
      "moduleId": "arqo.to_components",
      "host": "sketchup",
      "version": "0.3.1",
      "implementationStatus": "in-development",
      "category": "components",
      "locales": {
        "en": {
          "name": "To Components+",
          "summary": "Turn groups and loose geometry into components; alike groups share one definition.",
          "description": "One click turns selected groups into components, and groups holding the same geometry become instances of one definition at their own placement; loose faces and edges become one component or one per face. Names from a prefix or the group's own."
        },
        "tr": {
          "name": "To Components+",
          "summary": "Tekrar kullanılabilir parçalar, tek tıkla.",
          "description": "Seçili gruplar tek tıkla bileşene döner; aynı geometrili gruplar kendi yerlerinde tek tanımın kopyaları olur. Gevşek yüzey ve kenarlar tek bileşen ya da her yüz ayrı bileşen olur. Adlar önekten ya da grubun kendi adından."
        }
      },
      "license": {
        "sku": "arqo.tool.s27",
        "entitlement": "arqo.tool.s27"
      },
      "commands": [
        {
          "id": "arqo.to_components",
          "entitlement": "arqo.tool.s27"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "merge",
          "type": "string",
          "default": "same"
        },
        {
          "id": "loose",
          "type": "string",
          "default": "together"
        },
        {
          "id": "namePrefix",
          "type": "string",
          "default": "Part"
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "fdd432ef5bc0be0626052aaeb16570faf2fb8c5245deaa97af51a7ae0afc24a4"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Two alike boxes, the second drawn in the accent with a small link mark between them: copies become one component; stroke 2 for 16/24/32 px.",
            "sha256": "1503dc5f1d15ce01535d79adfebe6c58ab32124d44cd295967ebf630d6bb4779"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "882de78337b0d0395a756a946d5a1fe8a46a588ff72ee6880174fcbfcee04b16"
          }
        ]
      },
      "baselineCapabilities": [
        "Point, line, face, group ve component girdilerinden component üretimi."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/to-components/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "fdd432ef5bc0be0626052aaeb16570faf2fb8c5245deaa97af51a7ae0afc24a4",
          "strokeWidth": 1.45,
          "body": "<path d=\"m17 7 10 6v12l-10 5-10-5V13Zm0 12v11M7 13l10 6 10-6M3 3v8m-4-4h8\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "1503dc5f1d15ce01535d79adfebe6c58ab32124d44cd295967ebf630d6bb4779",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" d=\"m9 6 5 2.5v6L9 17l-5-2.5v-6Z\"/><path class=\"icon-object\" d=\"M4 8.5 9 11l5-2.5M9 11v6\"/><path class=\"icon-action\" fill=\"currentColor\" fill-opacity=\".25\" d=\"m23 15 5 2.5v6L23 26l-5-2.5v-6Z\"/><path class=\"icon-action\" d=\"M18 17.5 23 20l5-2.5M23 20v6\"/><path class=\"icon-action\" d=\"M13 20h3m-2-2 2 2-2 2\"/>",
          "note": "Two alike boxes, the second drawn in the accent with a small link mark between them: copies become one component; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "882de78337b0d0395a756a946d5a1fe8a46a588ff72ee6880174fcbfcee04b16",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"m9 6 5 2.5v6L9 17l-5-2.5v-6Z\"/><path class=\"icon-object\" d=\"M4 8.5 9 11l5-2.5M9 11v6\"/><path class=\"icon-action\" fill=\"currentColor\" fill-opacity=\".25\" d=\"m23 15 5 2.5v6L23 26l-5-2.5v-6Z\"/><path class=\"icon-action\" d=\"M18 17.5 23 20l5-2.5M23 20v6\"/><path class=\"icon-action\" d=\"M13 20h3m-2-2 2 2-2 2\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s28",
      "requirementId": "S28",
      "moduleId": "arqo.attach_to_face",
      "host": "sketchup",
      "version": "0.3.1",
      "implementationStatus": "in-development",
      "category": "components",
      "locales": {
        "en": {
          "name": "Attach to Face",
          "summary": "Set objects down on a surface: drop onto what lies below, or place on a clicked face.",
          "description": "Enter drops every selected group and component along an axis until it meets the first face below it (terrain, floors); a click on a face places them there keeping their offsets; Shift stands them square to the surface. Previewed as ghosts, one undo step."
        },
        "tr": {
          "name": "Attach to Face",
          "summary": "Nesneleri yüzeye oturt: altındakine düşür ya da tıklanan yüzeye yerleştir.",
          "description": "Enter, seçili grup ve bileşenleri bir eksen boyunca altlarındaki ilk yüzeye (arazi, döşeme) kadar düşürür; bir yüzeye tıklamak onları aralarındaki mesafeyi koruyarak oraya yerleştirir; Shift yüzeye dik durdurur. Hayalet önizleme, tek geri alma adımı."
        }
      },
      "license": {
        "sku": "arqo.tool.s28",
        "entitlement": "arqo.tool.s28"
      },
      "commands": [
        {
          "id": "arqo.attach_to_face",
          "entitlement": "arqo.tool.s28"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "d5583deab036322d4d1657ba5a24077782cd10bbc47443821855d5f9b20138c3"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A box falling onto a sloped surface along an accent arrow, its landing outline square to the slope; stroke 2 for 16/24/32 px.",
            "sha256": "23629b612c4a69976cfb348b18748810902852c0278ceaf4ee4e407b596e2928"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "f3479f51e344a91bbea93f1165cd88d345dacef3c1f0f75dfd9acc145900fc80"
          }
        ]
      },
      "baselineCapabilities": [
        "Seçili component'ları yüzeye glue/attach etme."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/attach-to-face/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "d5583deab036322d4d1657ba5a24077782cd10bbc47443821855d5f9b20138c3",
          "strokeWidth": 1.45,
          "body": "<path d=\"m3 22 14-7 12 6-15 8Zm8-15 7-4 7 4v9l-7 4-7-4Zm0 0 7 4 7-4m-7 4v9\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "23629b612c4a69976cfb348b18748810902852c0278ceaf4ee4e407b596e2928",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" d=\"M3 26 29 18\"/><rect class=\"icon-object\" x=\"12\" y=\"3\" width=\"8\" height=\"8\" rx=\"1\"/><path class=\"icon-action\" d=\"M16 11v6m-2-2 2 2 2-2\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"m12.5 24.6 7.6-2.3 2.3 7.6-7.6 2.3Z\"/>",
          "note": "A box falling onto a sloped surface along an accent arrow, its landing outline square to the slope; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "f3479f51e344a91bbea93f1165cd88d345dacef3c1f0f75dfd9acc145900fc80",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" d=\"M3 26 29 18\"/><rect class=\"icon-object\" x=\"12\" y=\"3\" width=\"8\" height=\"8\" rx=\"1\"/><path class=\"icon-action\" d=\"M16 11v6m-2-2 2 2 2-2\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"m12.5 24.6 7.6-2.3 2.3 7.6-7.6 2.3Z\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s29",
      "requirementId": "S29",
      "moduleId": "arqo.copy_follow",
      "host": "sketchup",
      "version": "0.3.1",
      "implementationStatus": "in-development",
      "category": "components",
      "locales": {
        "en": {
          "name": "Copy Follow",
          "summary": "Copy objects onto other objects, keeping their relative placement.",
          "description": "Select the source, click the object it belongs to: every other instance of that component gets a copy at the same relative place, or click the targets one by one and press Enter. Turned and moved targets get turned and moved copies."
        },
        "tr": {
          "name": "Copy Follow",
          "summary": "Düzenini takip eden kopyalar.",
          "description": "Kaynağı seç, ait olduğu nesneye tıkla: o bileşenin her kopyası aynı göreli yerde bir kopya alır; ya da hedefleri tek tek tıklayıp Enter'a bas. Dönmüş ve taşınmış hedeflere dönmüş ve taşınmış kopyalar gider."
        }
      },
      "license": {
        "sku": "arqo.tool.s29",
        "entitlement": "arqo.tool.s29"
      },
      "commands": [
        {
          "id": "arqo.copy_follow",
          "entitlement": "arqo.tool.s29"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "targets",
          "type": "string",
          "default": "all"
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "39ac4dcdab1f5fd9c2fa6db4a93f3a3935f7d12c36063be20ac37a7965f70407"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Three boxes in a row, a small accent part on the first and the same part arriving on the others along dotted arrows; stroke 2 for 16/24/32 px.",
            "sha256": "51a807fecfae0997b609364990744e2f63b2846d4d1079774337536e706b8d74"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "7a7645df59c74f9ea755f84b644bfebfeeb017d608625000a60040c2438e99c2"
          }
        ]
      },
      "baselineCapabilities": [
        "Kaynak nesneyi seçili group/component'ları veya tüm component instance'larını izleyerek kopyalama."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/copy-follow/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "39ac4dcdab1f5fd9c2fa6db4a93f3a3935f7d12c36063be20ac37a7965f70407",
          "strokeWidth": 1.45,
          "body": "<path d=\"M4 4h8v8H4Zm16 0h8v8h-8ZM20 20h8v8h-8ZM4 20h8v8H4Zm10-12h4m-2-2 2 2-2 2M24 14v4m-2-2 2 2 2-2M18 24h-4m2-2-2 2 2 2\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "51a807fecfae0997b609364990744e2f63b2846d4d1079774337536e706b8d74",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" d=\"M3 14h8v12H3Zm9 0h8v12h-8Zm9 0h8v12h-8Z\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"7\" y=\"18\" width=\"3\" height=\"4\" rx=\".5\"/><rect class=\"icon-action\" x=\"16\" y=\"18\" width=\"3\" height=\"4\" rx=\".5\"/><rect class=\"icon-action\" x=\"25\" y=\"18\" width=\"3\" height=\"4\" rx=\".5\"/><path class=\"icon-action\" d=\"M9 9h14\" stroke-dasharray=\"2 2\"/><path class=\"icon-action\" d=\"m21 7 2 2-2 2\"/>",
          "note": "Three boxes in a row, a small accent part on the first and the same part arriving on the others along dotted arrows; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "7a7645df59c74f9ea755f84b644bfebfeeb017d608625000a60040c2438e99c2",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" d=\"M3 14h8v12H3Zm9 0h8v12h-8Zm9 0h8v12h-8Z\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"7\" y=\"18\" width=\"3\" height=\"4\" rx=\".5\"/><rect class=\"icon-action\" x=\"16\" y=\"18\" width=\"3\" height=\"4\" rx=\".5\"/><rect class=\"icon-action\" x=\"25\" y=\"18\" width=\"3\" height=\"4\" rx=\".5\"/><path class=\"icon-action\" d=\"M9 9h14\" stroke-dasharray=\"2 2\"/><path class=\"icon-action\" d=\"m21 7 2 2-2 2\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s30",
      "requirementId": "S30",
      "moduleId": "arqo.delete_overlap",
      "host": "sketchup",
      "version": "0.3.0",
      "implementationStatus": "in-development",
      "category": "repair",
      "locales": {
        "en": {
          "name": "Delete Overlap",
          "summary": "Find and remove overlapping duplicate geometry.",
          "description": "Remove group and component copies that sit on the same spot, in the selection or the whole model."
        },
        "tr": {
          "name": "Delete Overlap",
          "summary": "Üst üste gelen kopyaları temizle.",
          "description": "Aynı konumdaki çakışan grup ve bileşen kopyalarını seçim/model kapsamında temizleme."
        }
      },
      "license": {
        "sku": "arqo.tool.s30",
        "entitlement": "arqo.tool.s30"
      },
      "commands": [
        {
          "id": "arqo.delete_overlap",
          "entitlement": "arqo.tool.s30"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "16f95c095277691189121bf5a6b236c02d63d33af57b5224baa068172a731cea"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "b39b98d05352abaf33b09c3868a036eaa46b32f21bc00a919dc09fcd0fb5e95b"
          }
        ]
      },
      "baselineCapabilities": [
        "Aynı konumdaki çakışan instance/group'ları seçim veya model kapsamında temizleme."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/delete-overlap/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "16f95c095277691189121bf5a6b236c02d63d33af57b5224baa068172a731cea",
          "strokeWidth": 1.45,
          "body": "<path d=\"M4 4h17v17H4Zm7 7h17v17H11Z\"/><path d=\"m14 14 11 11m0-11L14 25\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "b39b98d05352abaf33b09c3868a036eaa46b32f21bc00a919dc09fcd0fb5e95b",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" d=\"M4 4h17v17H4Z\"/><path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" d=\"M11 11h17v17H11Z\"/><path class=\"icon-action\" d=\"m14 14 11 11m0-11L14 25\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s31",
      "requirementId": "S31",
      "moduleId": "arqo.material_tools",
      "host": "sketchup",
      "version": "0.4.1",
      "implementationStatus": "in-development",
      "category": "materials",
      "locales": {
        "en": {
          "name": "Material Tools",
          "summary": "Replace materials, swap front and back, turn faces outward.",
          "description": "Replace every use of one material with another (or Default) in the selection or the whole model, nested groups and components included; swap front and back materials; turn faces so their front side faces out, keeping the paint where it was."
        },
        "tr": {
          "name": "Material Tools",
          "summary": "Malzemeleri değiştir, yüzleri düzelt.",
          "description": "Bir malzemenin her kullanımını seçimde ya da tüm modelde başka bir malzemeyle (ya da varsayılanla) değiştirir, iç içe grup ve bileşenler dahil; ön/arka malzemeyi takas eder; yüzleri boyasını koruyarak dışa çevirir."
        }
      },
      "license": {
        "sku": "arqo.tool.s31",
        "entitlement": "arqo.tool.s31"
      },
      "commands": [
        {
          "id": "arqo.material_tools",
          "entitlement": "arqo.tool.s31"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "last",
          "type": "string",
          "default": "{}",
          "panel": true
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "5252e54ea652f5a4a9e02a8be67de528dbeac224a125e93fda640b59b5b460c9"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Two swatches, the right one filled in the accent, with an arrow turning from left to right: one material becomes another; stroke 2 for 16/24/32 px.",
            "sha256": "c565394834a0d94649a6850acf6f3dd8027e96efe4eb1d36cf81edf208418ac3"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "d599225b30b7fa51c87273e382630d8794517cf974f515421e79507b0f43e30c"
          }
        ]
      },
      "baselineCapabilities": [
        "Malzeme değiştirme (seçim / model, ön ve arka yüz, kenar, grup ve bileşen), ön/arka takas ve yüz yönü düzeltme."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/material-tools/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "5252e54ea652f5a4a9e02a8be67de528dbeac224a125e93fda640b59b5b460c9",
          "strokeWidth": 1.45,
          "body": "<path d=\"m4 9 10-5v18L4 27Zm14 1 10-5v18l-10 5Z\"/><path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"m18 10 10-5v18l-10 5Z\"/><path d=\"M9 14h14m-3-3 3 3-3 3\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "c565394834a0d94649a6850acf6f3dd8027e96efe4eb1d36cf81edf208418ac3",
          "strokeWidth": 2,
          "body": "<rect class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".1\" x=\"3\" y=\"17\" width=\"11\" height=\"11\" rx=\"2\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"18\" y=\"17\" width=\"11\" height=\"11\" rx=\"2\"/><path class=\"icon-action\" d=\"M8 13V9a4 4 0 0 1 4-4h8\"/><path class=\"icon-action\" d=\"m17 2 3 3-3 3\"/><path class=\"icon-action\" d=\"M23.5 13v-2\"/>",
          "note": "Two swatches, the right one filled in the accent, with an arrow turning from left to right: one material becomes another; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "d599225b30b7fa51c87273e382630d8794517cf974f515421e79507b0f43e30c",
          "strokeWidth": 2,
          "body": "<rect class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" x=\"3\" y=\"17\" width=\"11\" height=\"11\" rx=\"2\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"18\" y=\"17\" width=\"11\" height=\"11\" rx=\"2\"/><path class=\"icon-action\" d=\"M8 13V9a4 4 0 0 1 4-4h8\"/><path class=\"icon-action\" d=\"m17 2 3 3-3 3\"/><path class=\"icon-action\" d=\"M23.5 13v-2\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s32",
      "requirementId": "S32",
      "moduleId": "arqo.paint",
      "host": "sketchup",
      "version": "0.4.0",
      "implementationStatus": "in-development",
      "category": "materials",
      "locales": {
        "en": {
          "name": "Paint+",
          "summary": "Paint inside, clear, flip faces, turn and align textures, measure area.",
          "description": "Paint every face inside selected groups and components (backs and unpainted faces as options), clear materials, flip faces, rotate, mirror or align textures to an edge, and measure the area each material covers in the selection."
        },
        "tr": {
          "name": "Paint+",
          "summary": "Boyamada daha fazla kontrol.",
          "description": "Seçili grup ve bileşenlerin içindeki her yüzü boyar (arka yüz ve yalnız boyasız seçenekleriyle), malzemeyi kaldırır, yüzleri çevirir, dokuyu döndürür, aynalar ya da bir kenara hizalar; seçimde her malzemenin kapladığı alanı ölçer."
        }
      },
      "license": {
        "sku": "arqo.tool.s32",
        "entitlement": "arqo.tool.s32"
      },
      "commands": [
        {
          "id": "arqo.paint",
          "entitlement": "arqo.tool.s32"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "last",
          "type": "string",
          "default": "{}",
          "panel": true
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "721c7b1b075ee05b8533734ff3328e75738026fb90612f48aee07f70e7708b2c"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A box seen open with its inner face filled in the accent and a bucket tipping in: paint inside; stroke 2 for 16/24/32 px.",
            "sha256": "04331092ecc7945ed0306fb26868aea3a36eba7a56e8558a023fde7fd3991cca"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "b14b29fd0ac06629ab8ed7bab667e2c2ce57cd434604bb3c14a5a75ad89d8372"
          }
        ]
      },
      "baselineCapabilities": [
        "İç yüzeyleri boyama, malzeme silme/değiştirme, doku döndürme/taşıma/hizalama, yüz ters çevirme ve malzeme alanı."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/paint/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "721c7b1b075ee05b8533734ff3328e75738026fb90612f48aee07f70e7708b2c",
          "strokeWidth": 1.45,
          "body": "<path d=\"M5 4h18v9H5Zm18 3h5v11H15v4m-3 0h6v7h-6Z\"/><path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"M5 4h18v9H5Z\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "04331092ecc7945ed0306fb26868aea3a36eba7a56e8558a023fde7fd3991cca",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" d=\"M4 12v14h18V12\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"M7 15h12v8H7Z\"/><path class=\"icon-object\" d=\"M4 12 13 7l9 5\"/><path class=\"icon-action\" d=\"M22 5h5l2 7h-7Z\"/><path class=\"icon-action\" d=\"M23.5 12v4\"/>",
          "note": "A box seen open with its inner face filled in the accent and a bucket tipping in: paint inside; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "b14b29fd0ac06629ab8ed7bab667e2c2ce57cd434604bb3c14a5a75ad89d8372",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" d=\"M4 12v14h18V12\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"M7 15h12v8H7Z\"/><path class=\"icon-blue\" d=\"M4 12 13 7l9 5\"/><path class=\"icon-action\" d=\"M22 5h5l2 7h-7Z\"/><path class=\"icon-action\" d=\"M23.5 12v4\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s33",
      "requirementId": "S33",
      "moduleId": "arqo.smart_stair",
      "host": "sketchup",
      "version": "0.1.1",
      "implementationStatus": "planned",
      "category": "architecture",
      "locales": {
        "en": {
          "name": "Smart Stair",
          "summary": "Build stairs from architectural input dimensions.",
          "description": "Simple, Slab, ZigZag, Steps, Extrude and Treads types; sloped surfaces. The ARQO version adds architectural rule checks."
        },
        "tr": {
          "name": "Smart Stair",
          "summary": "Bir kot farkından yeni bir merdiven.",
          "description": "Simple, Slab, ZigZag, Steps, Extrude ve Treads tipleri; eğimli yüzey üretimi. ARQO geliştirmesinde mimari kural kontrolleri."
        }
      },
      "license": {
        "sku": "arqo.tool.s33",
        "entitlement": "arqo.tool.s33"
      },
      "commands": [
        {
          "id": "arqo.smart_stair",
          "entitlement": "arqo.tool.s33"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "e6b1a3c7a28a75072291feceacad872f1d42738ad32a278e8a4f83b6723bbbd2"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Simplified silhouette and object/action roles; 16/24/32 px study.",
            "sha256": "88bd66508f6707c3d1cc91c393e753fc1e9f1f222cd77ac3245160ff193ed986"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "9139711ec39a79144fa29c443cdf5e9870b1d62641a7dba9f22cb9171c1622c2"
          }
        ]
      },
      "baselineCapabilities": [
        "Yüzeylerden Simple, Slab, ZigZag, Steps, Extrude ve Treads merdiven tipleri; slope üretimi."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/smart-stair/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "e6b1a3c7a28a75072291feceacad872f1d42738ad32a278e8a4f83b6723bbbd2",
          "strokeWidth": 1.45,
          "body": "<path d=\"M3 27h26M4 26v-6h6v-6h6V8h6V3h6v24M10 20h18M16 14h12M22 8h6\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "88bd66508f6707c3d1cc91c393e753fc1e9f1f222cd77ac3245160ff193ed986",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" fill=\"currentColor\" fill-opacity=\".08\" d=\"M4 27v-7h8v-8h8V5h8v22Z\"/><path class=\"icon-action\" stroke-width=\"2.5\" d=\"M4 20h8m0-8h8m0-7h8\"/>",
          "note": "Simplified silhouette and object/action roles; 16/24/32 px study."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "9139711ec39a79144fa29c443cdf5e9870b1d62641a7dba9f22cb9171c1622c2",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".3\" d=\"M4 27v-7h8v-8h8V5h8v22Z\"/><path class=\"icon-action\" stroke-width=\"2.5\" d=\"M4 20h8m0-8h8m0-7h8\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s34",
      "requirementId": "S34",
      "moduleId": "arqo.tag_tools",
      "host": "sketchup",
      "version": "0.4.1",
      "implementationStatus": "in-development",
      "category": "organization",
      "locales": {
        "en": {
          "name": "Tag Tools",
          "summary": "Assign, isolate, step through and clean up tags from the selection.",
          "description": "Assign a tag (new or existing) to the selection, untag raw geometry inside groups and components, isolate or hide the selection's tags, step through tags one at a time, make a tag current, select by tag and remove unused tags."
        },
        "tr": {
          "name": "Tag Tools",
          "summary": "Etiketler elinin altında.",
          "description": "Seçime etiket ata (yeni ya da var olan), grup ve bileşenlerin içindeki ham geometriyi etiketsiz yap, seçimin etiketlerini tek başına göster ya da kapat, etiketleri tek tek gez, güncel etiket yap, etikete göre seç, kullanılmayanları sil."
        }
      },
      "license": {
        "sku": "arqo.tool.s34",
        "entitlement": "arqo.tool.s34"
      },
      "commands": [
        {
          "id": "arqo.tag_tools",
          "entitlement": "arqo.tool.s34"
        }
      ],
      "coreDependencies": [
        "selection"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "4de0869259077496929a397ec0aaeb4e375826a1bd87cfbc2fb341e085447a58"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A tag label filled in the accent with its hole, two faint labels behind it: the one tag picked out; stroke 2 for 16/24/32 px.",
            "sha256": "0d31e9b383f2f49000fbd3d94789be03fbb3be17c9ab39000ddcaae8b618168a"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "f4eecf74b05eff91cf46e3c41b451fd94625ab7b0d517ef985d55d948b0ea77a"
          }
        ]
      },
      "baselineCapabilities": [
        "Etiket atama, iç geometriyi etiketsiz yapma, yalnız göster/kapat/hepsini aç, önceki/sonraki, güncel etiket, etikete göre seçme, kullanılmayanları silme."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/tag-tools/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "4de0869259077496929a397ec0aaeb4e375826a1bd87cfbc2fb341e085447a58",
          "strokeWidth": 1.45,
          "body": "<path d=\"m3 12 12-9h11v12L15 27Z\"/><circle cx=\"21\" cy=\"8\" r=\"2\"/><path d=\"m18 27 11-11V5\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "0d31e9b383f2f49000fbd3d94789be03fbb3be17c9ab39000ddcaae8b618168a",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" d=\"M8 5h8l9 9-8 8-9-9Z\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"M4 11h9l10 10-9 9L4 20Z\"/><circle fill=\"var(--bg, #fff)\" stroke=\"none\" cx=\"9\" cy=\"16\" r=\"2\"/>",
          "note": "A tag label filled in the accent with its hole, two faint labels behind it: the one tag picked out; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "f4eecf74b05eff91cf46e3c41b451fd94625ab7b0d517ef985d55d948b0ea77a",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" d=\"M8 5h8l9 9-8 8-9-9Z\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"M4 11h9l10 10-9 9L4 20Z\"/><circle fill=\"var(--bg, #fff)\" stroke=\"none\" cx=\"9\" cy=\"16\" r=\"2\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s35",
      "requirementId": "S35",
      "moduleId": "arqo.import_dxf",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "import",
      "locales": {
        "en": {
          "name": "Import DXF",
          "summary": "Import DXF geometry into a controlled context.",
          "description": "Text DXF import; targets dynamic blocks, mline, ellipse, spline, polyline, circle, arc, line and text."
        },
        "tr": {
          "name": "Import DXF",
          "summary": "Çizimlerini modelleme akışına taşı.",
          "description": "Metin DXF import; dynamic block, mline, ellipse, spline, polyline, circle, arc, line ve text desteği hedeflenir."
        }
      },
      "license": {
        "sku": "arqo.tool.s35",
        "entitlement": "arqo.tool.s35"
      },
      "commands": [
        {
          "id": "arqo.import_dxf",
          "entitlement": "arqo.tool.s35"
        }
      ],
      "coreDependencies": [
        "selection",
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "26050e11a79b0d6364883a76a1f919e72a7686fe76f3cf45a611ec913b472e3a"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "85a247a2b00691b630c6c4e7b5dd46989a25e86731a2bbaa085931c0631c78ab"
          }
        ]
      },
      "baselineCapabilities": [
        "Text DXF import; dynamic block, mline, ellipse, spline, polyline, circle, arc, line ve text desteği."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/import-dxf/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "26050e11a79b0d6364883a76a1f919e72a7686fe76f3cf45a611ec913b472e3a",
          "strokeWidth": 1.45,
          "body": "<path d=\"M11 3h11l6 6v20H11V19m11-16v7h6M3 15h15m-5-5 5 5-5 5M16 24h7\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "85a247a2b00691b630c6c4e7b5dd46989a25e86731a2bbaa085931c0631c78ab",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" d=\"M11 3h11l6 6v20H11Z\"/><path class=\"icon-blue\" d=\"M22 3v7h6M16 24h7\"/><path class=\"icon-action\" d=\"M3 15h15m-5-5 5 5-5 5\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s36",
      "requirementId": "S36",
      "moduleId": "arqo.import_camera",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "presentation",
      "locales": {
        "en": {
          "name": "Import Camera",
          "summary": "Import camera definitions.",
          "description": "Bring the camera and two-point perspective from another SketchUp file."
        },
        "tr": {
          "name": "Import Camera",
          "summary": "Başka bir modelin bakış açısını getir.",
          "description": "Başka SketchUp dosyasından kamera ve iki kaçışlı perspektif aktarımı."
        }
      },
      "license": {
        "sku": "arqo.tool.s36",
        "entitlement": "arqo.tool.s36"
      },
      "commands": [
        {
          "id": "arqo.import_camera",
          "entitlement": "arqo.tool.s36"
        }
      ],
      "coreDependencies": [
        "selection",
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "d2b9dd2c842841bea5ff505ac83ab230760a498dd3e0be1229aec5376819efb7"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "5d93c0780710e4bdd2762b8ab27f1782ecae22ceec9e004160baa6df678bc5fe"
          }
        ]
      },
      "baselineCapabilities": [
        "Başka SketchUp dosyasından kamera; two-point perspective desteği."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/import-camera/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "d2b9dd2c842841bea5ff505ac83ab230760a498dd3e0be1229aec5376819efb7",
          "strokeWidth": 1.45,
          "body": "<path d=\"M9 11h5l3-4h6l3 4h4v16H9Z\"/><circle cx=\"21\" cy=\"19\" r=\"5\"/><path d=\"M2 16h12m-4-4 4 4-4 4\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "5d93c0780710e4bdd2762b8ab27f1782ecae22ceec9e004160baa6df678bc5fe",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" d=\"M9 11h5l3-4h6l3 4h4v16H9Z\"/><circle class=\"icon-blue\" cx=\"21\" cy=\"19\" r=\"5\"/><path class=\"icon-action\" d=\"M2 16h12m-4-4 4 4-4 4\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s37",
      "requirementId": "S37",
      "moduleId": "arqo.export_scenes",
      "host": "sketchup",
      "version": "0.3.1",
      "implementationStatus": "in-development",
      "category": "presentation",
      "locales": {
        "en": {
          "name": "Export Scenes",
          "summary": "Every scene as an image, one click.",
          "description": "Pick a folder, the size and PNG or JPG: every scene (or the current one) is written as a numbered, safely named image at that size; the scene shown before is shown again. Nothing in the model changes."
        },
        "tr": {
          "name": "Export Scenes",
          "summary": "Her sahne tek tıkla görüntü.",
          "description": "Klasörü, boyutu ve PNG/JPG'yi seç: her sahne (ya da yalnız güncel sahne) numaralı, güvenli adlı bir görüntü olarak o boyutta yazılır; önceki sahne yeniden gösterilir. Modelde hiçbir şey değişmez."
        }
      },
      "license": {
        "sku": "arqo.tool.s37",
        "entitlement": "arqo.tool.s37"
      },
      "commands": [
        {
          "id": "arqo.export_scenes",
          "entitlement": "arqo.tool.s37"
        }
      ],
      "coreDependencies": [
        "selection"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "widthPx",
          "type": "number",
          "default": 1920
        },
        {
          "id": "heightPx",
          "type": "number",
          "default": 1080
        },
        {
          "id": "format",
          "type": "string",
          "default": "png"
        },
        {
          "id": "scenes",
          "type": "string",
          "default": "all"
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "094c55b907e697df20344e305820ed796a537b09ad4ae04bfca277739b3975da"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Three stacked frames with the front one filled in the accent and an arrow leaving it: scenes out as images; stroke 2 for 16/24/32 px.",
            "sha256": "919e647ad49fb489182c3d023b96671288de0a6a7f1bd5d6af474f01f436edf8"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "f569a9f2aad6d75b77a5b5a6418b4b757168d9b842b8fcfc7edf2cc04e9d5ef0"
          }
        ]
      },
      "baselineCapabilities": [
        "Sahneleri JPG/PNG dışa aktarma; sahne taşıma ve yeniden adlandırma."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/export-scenes/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "094c55b907e697df20344e305820ed796a537b09ad4ae04bfca277739b3975da",
          "strokeWidth": 1.45,
          "body": "<path d=\"M3 8h21v20H3Zm3 15 6-6 5 4 4-7M16 4h12v12m0-12L16 16\"/><circle cx=\"9\" cy=\"13\" r=\"2\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "919e647ad49fb489182c3d023b96671288de0a6a7f1bd5d6af474f01f436edf8",
          "strokeWidth": 2,
          "body": "<path class=\"icon-object\" d=\"M10 4h16v12M7 7h16v12\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"4\" y=\"10\" width=\"16\" height=\"12\" rx=\"1.5\"/><path class=\"icon-action\" d=\"M12 27h14m-3-3 3 3-3 3\"/>",
          "note": "Three stacked frames with the front one filled in the accent and an arrow leaving it: scenes out as images; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "f569a9f2aad6d75b77a5b5a6418b4b757168d9b842b8fcfc7edf2cc04e9d5ef0",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" d=\"M10 4h16v12M7 7h16v12\"/><rect class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" x=\"4\" y=\"10\" width=\"16\" height=\"12\" rx=\"1.5\"/><path class=\"icon-action\" d=\"M12 27h14m-3-3 3 3-3 3\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s38",
      "requirementId": "S38",
      "moduleId": "arqo.scene_shadows",
      "host": "sketchup",
      "version": "0.3.1",
      "implementationStatus": "in-development",
      "category": "presentation",
      "locales": {
        "en": {
          "name": "Scene Shadows",
          "summary": "The same shadows in every scene, one click.",
          "description": "Shadows on or off, the hour, day and month, into every scene (or the current one) at once; each scene is updated to keep them and the scene shown before comes back. One undo step."
        },
        "tr": {
          "name": "Scene Shadows",
          "summary": "Bütün sahnelerde aynı gölge, tek tıkla.",
          "description": "Gölge açık/kapalı, saat, gün ve ay; tüm sahnelere (ya da yalnız güncel sahneye) tek seferde; her sahne güncellenir, önceki sahne geri gelir. Tek geri alma adımı."
        }
      },
      "license": {
        "sku": "arqo.tool.s38",
        "entitlement": "arqo.tool.s38"
      },
      "commands": [
        {
          "id": "arqo.scene_shadows",
          "entitlement": "arqo.tool.s38"
        }
      ],
      "coreDependencies": [
        "selection"
      ],
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "shadows",
          "type": "string",
          "default": "on"
        },
        {
          "id": "hour",
          "type": "number",
          "default": 14
        },
        {
          "id": "day",
          "type": "number",
          "default": 21
        },
        {
          "id": "month",
          "type": "number",
          "default": 6
        },
        {
          "id": "scenes",
          "type": "string",
          "default": "all"
        }
      ],
      "settingsMigrations": [
        {
          "from": 1,
          "to": 2,
          "plan": "migration-1-2.md"
        }
      ],
      "icon": {
        "current": "icons/v3.svg",
        "revision": 3,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "7f07a7e761bf0ffbb61710ab23ed4701fb8ebda23e71f64bf01cfc7425dca049"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "A sun over two stacked scene frames, the shadow under the front one filled in the accent; stroke 2 for 16/24/32 px.",
            "sha256": "bcb124aaa56db926001fa95804283806a814ac5c8c6afb3e3bb1eaf72b7de254"
          },
          {
            "revision": 3,
            "file": "icons/v3.svg",
            "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule.",
            "sha256": "1d12d79b876ce7c4b9ef102479454dfbc0e7d6fad983fa4e9d6385c19b70b295"
          }
        ]
      },
      "baselineCapabilities": [
        "Tüm sahnelerde gölge açma/kapatma."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/scene-shadows/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "7f07a7e761bf0ffbb61710ab23ed4701fb8ebda23e71f64bf01cfc7425dca049",
          "strokeWidth": 1.45,
          "body": "<circle cx=\"10\" cy=\"10\" r=\"5\"/><path d=\"M10 1v2m0 14v2M1 10h2m14 0h2M3 3l2 2m10 10 2 2M3 17l2-2M15 5l2-2M18 19l10 8H12Z\"/><path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"m18 19 10 8H12Z\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "bcb124aaa56db926001fa95804283806a814ac5c8c6afb3e3bb1eaf72b7de254",
          "strokeWidth": 2,
          "body": "<circle class=\"icon-action\" cx=\"24\" cy=\"8\" r=\"3\"/><path class=\"icon-action\" d=\"M24 2v2m0 8v2m6-6h-2m-8 0h-2m7.5-4.5-1.4 1.4m-8.2 8.2-1.4 1.4\"/><path class=\"icon-object\" d=\"M4 14h14v10H4Z\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"M8 24h14l4 5H12Z\"/>",
          "note": "A sun over two stacked scene frames, the shadow under the front one filled in the accent; stroke 2 for 16/24/32 px."
        },
        {
          "revision": 3,
          "file": "icons/v3.svg",
          "sha256": "1d12d79b876ce7c4b9ef102479454dfbc0e7d6fad983fa4e9d6385c19b70b295",
          "strokeWidth": 2,
          "body": "<circle class=\"icon-action\" cx=\"24\" cy=\"8\" r=\"3\"/><path class=\"icon-action\" d=\"M24 2v2m0 8v2m6-6h-2m-8 0h-2m7.5-4.5-1.4 1.4m-8.2 8.2-1.4 1.4\"/><path class=\"icon-blue\" d=\"M4 14h14v10H4Z\"/><path class=\"icon-action-solid\" fill=\"currentColor\" stroke=\"none\" d=\"M8 24h14l4 5H12Z\"/>",
          "note": "Colour (2026-10-28): object bodies blue, dashed guides green, the action clay — the ARQOPush colour rule."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s39",
      "requirementId": "S39",
      "moduleId": "arqo.clipping_camera",
      "host": "sketchup",
      "version": "0.2.0",
      "implementationStatus": "in-development",
      "category": "presentation",
      "locales": {
        "en": {
          "name": "Clipping Camera",
          "summary": "Find what makes close-up views clip.",
          "description": "Finds what makes SketchUp cut away what is near the camera: geometry far outside the model's main part (hidden items, guides, text and section planes count too), at any depth, and the model's distance from the origin. Changes nothing; the far items it can reach are left selected for one Delete."
        },
        "tr": {
          "name": "Clipping Camera",
          "summary": "Yakın görünümün neden kesildiğini bul.",
          "description": "SketchUp'ın kameraya yakın olanı kesmesinin nedenini bulur: modelin ana parçasının çok dışında kalan geometri (gizliler, kılavuzlar, yazılar ve kesit düzlemleri de sayılır), her derinlikte, ve modelin orijine uzaklığı. Modeli değiştirmez; ulaşabildiği uzak nesneleri tek Delete için seçili bırakır."
        }
      },
      "license": {
        "sku": "arqo.tool.s39",
        "entitlement": "arqo.tool.s39"
      },
      "commands": [
        {
          "id": "arqo.clipping_camera",
          "entitlement": "arqo.tool.s39"
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry",
        "units"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "751c425d17399e392b8537460b2520833cfd7b41993de8068b6232a4c700de45"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "cefec8b406134eef5d4c5d0028438553e750fc74a109339684de87bfa6d1c13c"
          }
        ]
      },
      "baselineCapabilities": [
        "FORCE/NEAR üzerinden kamera near clipping kontrolü; kaynak Windows odaklıdır.",
        "ARQO yolu (2026-10-28): API yakın düzlemi ayarlamıyor; neden teşhisi (uzak ve başıboş geometri, orijine uzaklık) ve seçerek düzeltme."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/clipping-camera/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "751c425d17399e392b8537460b2520833cfd7b41993de8068b6232a4c700de45",
          "strokeWidth": 1.45,
          "body": "<path d=\"M3 12h8v12H3Zm8 4 16-9v22l-16-9M20 3v27\"/><path d=\"M17 4h6\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "cefec8b406134eef5d4c5d0028438553e750fc74a109339684de87bfa6d1c13c",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" d=\"M3 12h8v12H3Z\"/><path class=\"icon-blue\" d=\"m11 16 16-9v22l-16-9\"/><path class=\"icon-action\" d=\"M20 3v27M17 4h6\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s40",
      "requirementId": "S40",
      "moduleId": "arqo.draw_boundary",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "import",
      "locales": {
        "en": {
          "name": "Draw Boundary",
          "summary": "Draw a boundary from reference geometry.",
          "description": "Draw a boundary from a coordinate file."
        },
        "tr": {
          "name": "Draw Boundary",
          "summary": "Koordinatlardan sınırını çiz.",
          "description": "Koordinat dosyasından sınır çizimi."
        }
      },
      "license": {
        "sku": "arqo.tool.s40",
        "entitlement": "arqo.tool.s40"
      },
      "commands": [
        {
          "id": "arqo.draw_boundary",
          "entitlement": "arqo.tool.s40"
        }
      ],
      "coreDependencies": [
        "selection",
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "bbecf695e4f2f89bed7c559b0c1663461719d3eac74cdd4f53c29392eb7b6f1f"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line.",
            "sha256": "33dab2bb2c91c47e7d821d305b50caeabaae0a0fbbc7bd25fff7879d4fd651c2"
          }
        ]
      },
      "baselineCapabilities": [
        "Koordinat dosyasından sınır çizimi."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/draw-boundary/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "bbecf695e4f2f89bed7c559b0c1663461719d3eac74cdd4f53c29392eb7b6f1f",
          "strokeWidth": 1.45,
          "body": "<path d=\"m5 23 3-16 17-2 3 16-14 8Z\"/><circle cx=\"8\" cy=\"7\" r=\"2\"/><circle cx=\"25\" cy=\"5\" r=\"2\"/><circle cx=\"28\" cy=\"21\" r=\"2\"/><circle cx=\"14\" cy=\"29\" r=\"2\"/><circle cx=\"5\" cy=\"23\" r=\"2\"/>",
          "note": "Initial outline study."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "33dab2bb2c91c47e7d821d305b50caeabaae0a0fbbc7bd25fff7879d4fd651c2",
          "strokeWidth": 2,
          "body": "<path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".45\" d=\"m5 23 3-16 17-2 3 16-14 8Z\"/><circle class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" cx=\"8\" cy=\"7\" r=\"2\"/><circle class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" cx=\"25\" cy=\"5\" r=\"2\"/><circle class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" cx=\"28\" cy=\"21\" r=\"2\"/><circle class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" cx=\"14\" cy=\"29\" r=\"2\"/><circle class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".22\" cx=\"5\" cy=\"23\" r=\"2\"/>",
          "note": "Roles and colour (2026-10-28): the object blue, the action clay, guides green — the ARQOPush colour rule, on the 2 px line."
        }
      ],
      "commandIcons": {}
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.a01",
      "requirementId": "A01",
      "moduleId": "arqo.push",
      "host": "sketchup",
      "version": "0.3.0",
      "implementationStatus": "in-development",
      "category": "geometry",
      "locales": {
        "en": {
          "name": "ARQOPush",
          "summary": "Professional push/pull engine: twelve modes on one tool.",
          "description": "Twelve modes: normal, multi-face, joint, to face or object, thicken, taper, offset, copy, symmetric, axis lock and repeat."
        },
        "tr": {
          "name": "ARQOPush",
          "summary": "Karmaşık geometriyi tek araçla değiştiren push/pull motoru.",
          "description": "On iki mod: normal, çoklu yüzey, joint, hedef yüzey/nesne, kalınlık, taper, ofset, kopya, simetrik, eksen kilidi, tekrar."
        }
      },
      "license": {
        "sku": "arqo.tool.a01",
        "entitlement": "arqo.tool.a01"
      },
      "commands": [
        {
          "id": "arqo.push",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Push/Pull",
              "summary": "Bir yüzeyi normali boyunca sürükleyerek it veya çek."
            },
            "en": {
              "name": "Push/Pull",
              "summary": "Push or pull one face along its normal."
            }
          },
          "icon": {
            "file": "icons/modes/push.svg",
            "sha256": "aca7b0610279fab42d257567ae4a982c69c785db38cf122b31723fbbe8dfb29f"
          }
        },
        {
          "id": "arqo.push_multi",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Multi Face",
              "summary": "Seçili bütün yüzeyleri aynı mesafede it."
            },
            "en": {
              "name": "Multi Face",
              "summary": "Push every selected face by the same distance."
            }
          },
          "icon": {
            "file": "icons/modes/push_multi.svg",
            "sha256": "d91953f8a60d0c54b008c4d2b0155ee744de9c9cfc9832e94463f12dc82e4984"
          }
        },
        {
          "id": "arqo.push_joint",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Joint Push",
              "summary": "Bitişik yüzeyleri köşeleri koruyarak birlikte it."
            },
            "en": {
              "name": "Joint Push",
              "summary": "Push adjacent faces together, keeping their joints."
            }
          },
          "icon": {
            "file": "icons/modes/push_joint.svg",
            "sha256": "3c4b168370411b8c061916029740801cfb19a006530d1ef1f93651d4e4c033e2"
          }
        },
        {
          "id": "arqo.push_to_face",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Push to Face",
              "summary": "Bir yüzeyi hedef yüzeyin düzlemine kadar it."
            },
            "en": {
              "name": "Push to Face",
              "summary": "Push a face until it meets a target face."
            }
          },
          "icon": {
            "file": "icons/modes/push_to_face.svg",
            "sha256": "438a8753c5000b04f7b819c2af17e6538ef9f99a83588a3f72e94f91a4ba44be"
          }
        },
        {
          "id": "arqo.push_to_object",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Push to Object",
              "summary": "Bir yüzeyi hedef nesneye kadar it."
            },
            "en": {
              "name": "Push to Object",
              "summary": "Push a face until it meets a target object."
            }
          },
          "icon": {
            "file": "icons/modes/push_to_object.svg",
            "sha256": "989c436879c5c80eeeef431310efee54f3b6017f8b97abda8c7ec1f98cc9a491"
          }
        },
        {
          "id": "arqo.push_thicken",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Thicken",
              "summary": "Yüzeylere kalınlık ver."
            },
            "en": {
              "name": "Thicken",
              "summary": "Give faces a thickness."
            }
          },
          "icon": {
            "file": "icons/modes/push_thicken.svg",
            "sha256": "23c5d709d11f4cde7951bb7ce70234e4e6880af1ed897e1daca34511f55a69f9"
          }
        },
        {
          "id": "arqo.push_taper",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Taper",
              "summary": "İterken kesiti daralt veya genişlet."
            },
            "en": {
              "name": "Taper",
              "summary": "Taper the section while pushing."
            }
          },
          "icon": {
            "file": "icons/modes/push_taper.svg",
            "sha256": "0797cd511ea23271c5381e1fc33e4a8cde145150e4c329921046d9064fc54b3d"
          }
        },
        {
          "id": "arqo.push_offset",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Offset + Push",
              "summary": "Önce ofsetle, sonra it."
            },
            "en": {
              "name": "Offset + Push",
              "summary": "Offset first, then push."
            }
          },
          "icon": {
            "file": "icons/modes/push_offset.svg",
            "sha256": "654fcabc948410fa5f53e96dc7381bcf4a67930369a67bbd428fd1feb2e5a04e"
          }
        },
        {
          "id": "arqo.push_copy",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Copy + Push",
              "summary": "Yüzeyin kopyasını itip aslını bırak."
            },
            "en": {
              "name": "Copy + Push",
              "summary": "Push a copy of the face and keep the original."
            }
          },
          "icon": {
            "file": "icons/modes/push_copy.svg",
            "sha256": "95755f937e0ce48c747ed8d34d7c2580e22d8c8711462692bcde060a92a71e22"
          }
        },
        {
          "id": "arqo.push_symmetric",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Symmetric Push",
              "summary": "İki yöne eşit it."
            },
            "en": {
              "name": "Symmetric Push",
              "summary": "Push equally in both directions."
            }
          },
          "icon": {
            "file": "icons/modes/push_symmetric.svg",
            "sha256": "2b222e6dab4ad5d680988e4dd3e8a751860b9e02a8cddf30e7f6642e09d49ac9"
          }
        },
        {
          "id": "arqo.push_axis",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Axis/Normal Lock",
              "summary": "Sürüklemeyi eksene veya normale kilitle."
            },
            "en": {
              "name": "Axis/Normal Lock",
              "summary": "Lock the drag to an axis or the normal."
            }
          },
          "icon": {
            "file": "icons/modes/push_axis.svg",
            "sha256": "8c50f1aa4706735e9eac10321e75cae5973a343d12d2f7f6c72658116af4191a"
          }
        },
        {
          "id": "arqo.push_repeat",
          "entitlement": "arqo.tool.a01",
          "locales": {
            "tr": {
              "name": "Repeat",
              "summary": "Son mesafeyi seçime tekrar uygula."
            },
            "en": {
              "name": "Repeat",
              "summary": "Apply the last distance to the selection again."
            }
          },
          "icon": {
            "file": "icons/modes/push_repeat.svg",
            "sha256": "1e4654978ec8e65e509b2044e3f4451c828ac7489f8967f5874da7b56a86d89a"
          }
        }
      ],
      "coreDependencies": [
        "selection",
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [
        {
          "id": "lastDistanceMm",
          "type": "number",
          "default": 1000
        },
        {
          "id": "direction",
          "type": "string",
          "default": "normal"
        },
        {
          "id": "thickenSide",
          "type": "string",
          "default": "outside"
        }
      ],
      "icon": {
        "current": "icons/v2.svg",
        "revision": 2,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial draft: a slab with an upward action arrow.",
            "sha256": "bccee6d284951702aabbafde610b4161d235b7825c345a7313ecc62461ded81e"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "ARQO line (2 px): a blue box, its clay top pushed up by a clay arrow; each of the twelve modes has its own icon under icons/modes/.",
            "sha256": "aca7b0610279fab42d257567ae4a982c69c785db38cf122b31723fbbe8dfb29f"
          }
        ]
      },
      "baselineCapabilities": [
        "Normal push/pull, multi face, joint push, push to face/object, thicken, taper, offset + push, copy + push, symmetric push, axis/normal lock, repeat/incremental."
      ],
      "acceptanceProfile": "sketchup-standard",
      "toolbar": "special",
      "manifestPath": "tools/arqo-push/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "bccee6d284951702aabbafde610b4161d235b7825c345a7313ecc62461ded81e",
          "strokeWidth": 1.45,
          "body": "<path fill=\"currentColor\" fill-opacity=\"0.12\" stroke=\"none\" d=\"m6 12 12-4 8 4-12 4Z\"/><path d=\"m6 12 12-4 8 4-12 4Z\"/><path d=\"M6 12v8l12 4 8-4v-8M18 24v-8\"/><path class=\"icon-action\" d=\"M23 5v-4M20 4l3-3 3 3\"/>",
          "note": "Initial draft: a slab with an upward action arrow."
        },
        {
          "revision": 2,
          "file": "icons/v2.svg",
          "sha256": "aca7b0610279fab42d257567ae4a982c69c785db38cf122b31723fbbe8dfb29f",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".35\" d=\"M6 16v7l10 5 10-5v-7l-10 5Z\"/><path class=\"icon-blue\" d=\"M16 21v7\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" d=\"m6 16 10-5 10 5-10 5Z\"/><path class=\"icon-action\" d=\"M16 15V3M12 7l4-4 4 4\"/>",
          "note": "ARQO line (2 px): a blue box, its clay top pushed up by a clay arrow; each of the twelve modes has its own icon under icons/modes/."
        }
      ],
      "commandIcons": {
        "arqo.push": {
          "file": "icons/modes/push.svg",
          "sha256": "aca7b0610279fab42d257567ae4a982c69c785db38cf122b31723fbbe8dfb29f",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".35\" d=\"M6 16v7l10 5 10-5v-7l-10 5Z\"/><path class=\"icon-blue\" d=\"M16 21v7\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" d=\"m6 16 10-5 10 5-10 5Z\"/><path class=\"icon-action\" d=\"M16 15V3M12 7l4-4 4 4\"/>"
        },
        "arqo.push_multi": {
          "file": "icons/modes/push_multi.svg",
          "sha256": "d91953f8a60d0c54b008c4d2b0155ee744de9c9cfc9832e94463f12dc82e4984",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".4\" d=\"m1 25 4-2 4 2-4 2Zm11 0 4-2 4 2-4 2Zm11 0 4-2 4 2-4 2Z\"/><path class=\"icon-action\" d=\"M5 24V9M2.5 11.5 5 9l2.5 2.5M16 24V9M13.5 11.5 16 9l2.5 2.5M27 24V9M24.5 11.5 27 9l2.5 2.5\"/>"
        },
        "arqo.push_joint": {
          "file": "icons/modes/push_joint.svg",
          "sha256": "3c4b168370411b8c061916029740801cfb19a006530d1ef1f93651d4e4c033e2",
          "strokeWidth": 2,
          "body": "<path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" stroke=\"none\" d=\"M2 28a14 14 0 0 1 28 0h-6a8 8 0 0 0-16 0Z\"/><path class=\"icon-action\" d=\"M2 28a14 14 0 0 1 28 0\"/><path class=\"icon-blue\" d=\"M8 28a8 8 0 0 1 16 0\"/><path class=\"icon-green\" d=\"M16 19v-4M10 22.5l-3-3M22 22.5l3-3\"/>"
        },
        "arqo.push_to_face": {
          "file": "icons/modes/push_to_face.svg",
          "sha256": "438a8753c5000b04f7b819c2af17e6538ef9f99a83588a3f72e94f91a4ba44be",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".35\" d=\"M6 16v7l10 5 10-5v-7l-10 5Z\"/><path class=\"icon-blue\" d=\"M16 21v7\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" d=\"m6 16 10-5 10 5-10 5Z\"/><path class=\"icon-green\" stroke-dasharray=\"3 3\" d=\"M3 4h26\"/><path class=\"icon-action\" d=\"M16 15V7M12.5 10.5 16 7l3.5 3.5\"/>"
        },
        "arqo.push_to_object": {
          "file": "icons/modes/push_to_object.svg",
          "sha256": "989c436879c5c80eeeef431310efee54f3b6017f8b97abda8c7ec1f98cc9a491",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".35\" d=\"M6 16v7l10 5 10-5v-7l-10 5Z\"/><path class=\"icon-blue\" d=\"M16 21v7\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" d=\"m6 16 10-5 10 5-10 5Z\"/><path class=\"icon-green\" fill=\"currentColor\" fill-opacity=\".4\" d=\"M22 2h8v8h-8Z\"/><path class=\"icon-action\" d=\"m16 15 4.5-4.5M16.5 10.5h4v4\"/>"
        },
        "arqo.push_thicken": {
          "file": "icons/modes/push_thicken.svg",
          "sha256": "23c5d709d11f4cde7951bb7ce70234e4e6880af1ed897e1daca34511f55a69f9",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".35\" d=\"m4 21 12-6 12 6-12 6Z\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" d=\"m4 14 12-6 12 6-12 6Z\"/><path class=\"icon-action\" d=\"M4 14v7M28 14v7M16 20v7\"/>"
        },
        "arqo.push_taper": {
          "file": "icons/modes/push_taper.svg",
          "sha256": "0797cd511ea23271c5381e1fc33e4a8cde145150e4c329921046d9064fc54b3d",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".35\" d=\"m4 22 12-6 12 6-12 6Z\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" d=\"m10 11 6-3 6 3-6 3Z\"/><path class=\"icon-action\" d=\"m4 22 6-11M28 22l-6-11M16 28V14\"/>"
        },
        "arqo.push_offset": {
          "file": "icons/modes/push_offset.svg",
          "sha256": "654fcabc948410fa5f53e96dc7381bcf4a67930369a67bbd428fd1feb2e5a04e",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".35\" d=\"m4 21 12-6 12 6-12 6Z\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" d=\"m10 21 6-3 6 3-6 3Z\"/><path class=\"icon-action\" d=\"M16 20V5M12.5 8.5 16 5l3.5 3.5\"/>"
        },
        "arqo.push_copy": {
          "file": "icons/modes/push_copy.svg",
          "sha256": "95755f937e0ce48c747ed8d34d7c2580e22d8c8711462692bcde060a92a71e22",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" stroke-dasharray=\"2 3\" d=\"m4 23 12-6 12 6-12 6Z\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" d=\"m4 10 12-6 12 6-12 6Z\"/><path class=\"icon-green\" d=\"M16 23v-6M13.5 19.5 16 17l2.5 2.5\"/>"
        },
        "arqo.push_symmetric": {
          "file": "icons/modes/push_symmetric.svg",
          "sha256": "2b222e6dab4ad5d680988e4dd3e8a751860b9e02a8cddf30e7f6642e09d49ac9",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".4\" d=\"m4 16 12-6 12 6-12 6Z\"/><path class=\"icon-action\" d=\"M16 16V2M12.5 5.5 16 2l3.5 3.5\"/><path class=\"icon-green\" d=\"M16 16v14M12.5 26.5 16 30l3.5-3.5\"/>"
        },
        "arqo.push_axis": {
          "file": "icons/modes/push_axis.svg",
          "sha256": "8c50f1aa4706735e9eac10321e75cae5973a343d12d2f7f6c72658116af4191a",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".35\" d=\"M6 16v7l10 5 10-5v-7l-10 5Z\"/><path class=\"icon-blue\" d=\"M16 21v7\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" d=\"m6 16 10-5 10 5-10 5Z\"/><path class=\"icon-object\" stroke-dasharray=\"2 3\" d=\"M16 15V5\"/><path class=\"icon-green\" d=\"M16 16 27 5M21 5h6v6\"/>"
        },
        "arqo.push_repeat": {
          "file": "icons/modes/push_repeat.svg",
          "sha256": "1e4654978ec8e65e509b2044e3f4451c828ac7489f8967f5874da7b56a86d89a",
          "strokeWidth": 2,
          "body": "<path class=\"icon-blue\" fill=\"currentColor\" fill-opacity=\".35\" d=\"M6 16v7l10 5 10-5v-7l-10 5Z\"/><path class=\"icon-blue\" d=\"M16 21v7\"/><path class=\"icon-surface icon-action\" fill=\"currentColor\" fill-opacity=\".55\" d=\"m6 16 10-5 10 5-10 5Z\"/><path class=\"icon-action\" d=\"M14 15V4M10.5 7.5 14 4l3.5 3.5\"/><path class=\"icon-green\" d=\"M27 10a4 4 0 1 1-1.2-2.9M27 4v3.5h-3.5\"/>"
        }
      }
    }
  ],
  "bundle": {
    "schemaVersion": 1,
    "id": "arqo.suite",
    "version": "0.1.0",
    "status": "planned",
    "name": {
      "tr": "ARQO - Tam Paket"
    },
    "toolIds": [
      "arqo.tool.s01",
      "arqo.tool.s02",
      "arqo.tool.s03",
      "arqo.tool.s04",
      "arqo.tool.s05",
      "arqo.tool.s06",
      "arqo.tool.s07",
      "arqo.tool.s08",
      "arqo.tool.s09",
      "arqo.tool.s10",
      "arqo.tool.s11",
      "arqo.tool.s12",
      "arqo.tool.s13",
      "arqo.tool.s14",
      "arqo.tool.s15",
      "arqo.tool.s16",
      "arqo.tool.s17",
      "arqo.tool.s18",
      "arqo.tool.s19",
      "arqo.tool.s20",
      "arqo.tool.s21",
      "arqo.tool.s22",
      "arqo.tool.s23",
      "arqo.tool.s24",
      "arqo.tool.s25",
      "arqo.tool.s26",
      "arqo.tool.s27",
      "arqo.tool.s28",
      "arqo.tool.s29",
      "arqo.tool.s30",
      "arqo.tool.s31",
      "arqo.tool.s32",
      "arqo.tool.s33",
      "arqo.tool.s34",
      "arqo.tool.s35",
      "arqo.tool.s36",
      "arqo.tool.s37",
      "arqo.tool.s38",
      "arqo.tool.s39",
      "arqo.tool.s40",
      "arqo.tool.a01"
    ],
    "plannedAdditions": [
      "Smart Extrude",
      "Replace Similar",
      "Model Cleaner",
      "Model Doctor",
      "Performance Doctor",
      "Smart Wall",
      "Smart Door / Window",
      "Smart Slab",
      "Smart Skirting",
      "Cabinet Builder",
      "Import CAD Cleaner",
      "Live Quantity",
      "Scene / Presentation Builder"
    ]
  },
  "tokens": {
    "schemaVersion": 1,
    "typography": {
      "family": "\"Segoe UI\", Arial, sans-serif"
    },
    "icon": {
      "viewBox": "0 0 32 32",
      "reviewSizes": [
        16,
        24,
        32
      ],
      "largeSize": 48,
      "strokeWidth": 2,
      "objectRole": "currentColor",
      "actionRole": "accent",
      "status": "draft"
    },
    "themes": {
      "light": {
        "bg": "#f7f6f2",
        "surface": "#fffefa",
        "surface-2": "#eeede7",
        "ink": "#262923",
        "muted": "#75796f",
        "line": "#dedfd5"
      },
      "dark": {
        "bg": "#20241f",
        "surface": "#292f27",
        "surface-2": "#252c23",
        "ink": "#e9ede0",
        "muted": "#abb7a1",
        "line": "#41493a"
      }
    },
    "accents": {
      "clay": {
        "color": "#d57750",
        "light": {
          "soft": "#f2e4db",
          "ink": "#9b4a2b"
        },
        "dark": {
          "soft": "#493a2b",
          "ink": "#efb18b"
        }
      },
      "blue": {
        "color": "#6d91c5",
        "light": {
          "soft": "#e3eaf4",
          "ink": "#45638e"
        },
        "dark": {
          "soft": "#2a3b4f",
          "ink": "#b0c9f0"
        }
      },
      "green": {
        "color": "#7f9f81",
        "light": {
          "soft": "#e4ebdf",
          "ink": "#48634b"
        },
        "dark": {
          "soft": "#334130",
          "ink": "#b9d1a9"
        }
      }
    }
  },
  "platforms": {
    "schemaVersion": 1,
    "brand": {
      "id": "plugins-for-aec",
      "name": "PluginsForAEC",
      "status": "final",
      "domain": "pluginsforaec.com",
      "site": "https://pluginsforaec.com"
    },
    "platforms": [
      {
        "id": "sketchup",
        "productId": "arqo",
        "name": "ARQO for SketchUp",
        "status": "design-prototype",
        "gate": "first-product"
      },
      {
        "id": "autocad",
        "productId": "cadpilot",
        "name": "CADPILOT",
        "status": "roadmap",
        "gate": "after-arqo-commercial-validation"
      },
      {
        "id": "rhino",
        "productId": "rhinopilot",
        "name": "RHINOPILOT",
        "status": "roadmap",
        "gate": "after-cadpilot-commercial"
      },
      {
        "id": "grasshopper",
        "productId": "gh-tools",
        "name": "GH Tools",
        "status": "roadmap",
        "gate": "derived-from-rhino"
      }
    ]
  }
};
