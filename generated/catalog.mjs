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
          "tr": "Geometri"
        }
      },
      {
        "id": "repair",
        "label": {
          "tr": "Onarım"
        }
      },
      {
        "id": "transform",
        "label": {
          "tr": "Dönüşüm"
        }
      },
      {
        "id": "cut",
        "label": {
          "tr": "Kesme"
        }
      },
      {
        "id": "components",
        "label": {
          "tr": "Bileşen"
        }
      },
      {
        "id": "selection",
        "label": {
          "tr": "Seçim"
        }
      },
      {
        "id": "materials",
        "label": {
          "tr": "Malzeme"
        }
      },
      {
        "id": "architecture",
        "label": {
          "tr": "Mimari"
        }
      },
      {
        "id": "organization",
        "label": {
          "tr": "Düzen"
        }
      },
      {
        "id": "import",
        "label": {
          "tr": "Aktarım"
        }
      },
      {
        "id": "presentation",
        "label": {
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
      "version": "0.2.0",
      "implementationStatus": "in-development",
      "category": "geometry",
      "locales": {
        "en": {
          "summary": "Create faces from suitable closed planar edges."
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
            "sha256": "4104a890fc9d3ebd0b8b9f506fd4b998ed47913a5ffcd8e830b2b46939ee7bd5"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Simplified silhouette and object/action roles; 16/24/32 px study.",
            "sha256": "96b68f1222f74aab9bc7a33e12ee3eebab7ae97820b7113d17b673386cb9ed0f"
          }
        ]
      },
      "baselineCapabilities": [
        "Seçili kenarlardan yüzey üretimi; sağ tık erişimi."
      ],
      "acceptanceProfile": "sketchup-standard",
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s02",
      "requirementId": "S02",
      "moduleId": "arqo.line_to_face",
      "host": "sketchup",
      "version": "0.2.0",
      "implementationStatus": "in-development",
      "category": "geometry",
      "locales": {
        "en": {
          "summary": "Create faces from lines and reference directions."
        },
        "tr": {
          "name": "Line to Face",
          "summary": "Çizgileri yüksekliği olan yüzeylere dönüştür.",
          "description": "Seçili çizgilerden yüzey üretimi; Z/yükseklik ve mod tuşu davranışları."
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
      "settingsSchemaVersion": 2,
      "settings": [
        {
          "id": "heightMm",
          "type": "number",
          "default": 3000
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "124fe3858eec0d8dd6e6c4949be2faa7891f1dbd00220eae6373525f9c8f4fd7"
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
        }
      ]
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
          "summary": "Draw and edit connected edges."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "d2d88d24ef1da7732a61341111d0bd930db4359c2d9f2657086d2abfeb4595ba"
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
        }
      ]
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
          "summary": "Build box geometry from reference inputs."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "f9c6337e25cb91a62ac11c09b92643de3f467267735176617eb2f1752e602dda"
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
        }
      ]
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
          "summary": "Create panel elements from selected geometry."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "bcaa27cc069e2ce7ce85f09fd348c073c94d6a4c52cead4fc4a6a46c14a5969b"
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
        }
      ]
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
          "summary": "Create frames around selected faces."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "e5f2addbc3a2c911be19da798f90427b15b93ab0ec33a753b920007b1c8fba8a"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s07",
      "requirementId": "S07",
      "moduleId": "arqo.divide",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "geometry",
      "locales": {
        "en": {
          "summary": "Divide edges and faces into regular parts."
        },
        "tr": {
          "name": "Divide+",
          "summary": "Yüzeylerini düzenli parçalara ayır.",
          "description": "Yüzeyleri iki yönde bölme ve uygun sağ tık akışı."
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
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "7b73d97c8a6c9f750f1fc54d169b790ec37743f678ca0ac1f5280543b645410d"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s08",
      "requirementId": "S08",
      "moduleId": "arqo.smart_offset",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "geometry",
      "locales": {
        "en": {
          "summary": "Offset selected geometry with guided distances."
        },
        "tr": {
          "name": "Smart Offset",
          "summary": "Bir sınırdan sayısız olasılığa.",
          "description": "Çoklu, iki taraflı ve rastgele offset; önceki değeri yeniden kullanma."
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
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "672dc419634e1d4f4ee3a53a2506760311fec3f8a9df011125e1d13f684a7ba3"
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
        }
      ]
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
          "summary": "Connect edges and repair gaps."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "f3ebe7b2cfbc4c37683c6651eb7b65c8747627dde6291d26924146417ccf0c92"
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
        }
      ]
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
          "summary": "Find open endpoints and gaps in edge geometry."
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
        "current": "icons/v2.svg",
        "revision": 2,
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
        }
      ]
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
          "summary": "Join compatible connected edges into curves."
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
        "current": "icons/v2.svg",
        "revision": 2,
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s12",
      "requirementId": "S12",
      "moduleId": "arqo.curve_to_arc",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "repair",
      "locales": {
        "en": {
          "summary": "Convert suitable curves to arcs."
        },
        "tr": {
          "name": "Curve to Arc",
          "summary": "Eğrini temiz bir yaya dönüştür.",
          "description": "Eğriyi yay veya daireye dönüştürme."
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
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "f4aba83518ac4b26d825fa1cbf47a48ec06bb56df0946b0004e4f1b5d4ede191"
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
        }
      ]
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
          "summary": "Control edge visibility in selected geometry."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "62cee52bb9c0eaedceae3f5b2d8300182c2fd62b2967da5733c405a34bbd7ef5"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s14",
      "requirementId": "S14",
      "moduleId": "arqo.mirror",
      "host": "sketchup",
      "version": "0.1.1",
      "implementationStatus": "planned",
      "category": "transform",
      "locales": {
        "en": {
          "summary": "Mirror selected objects about a reference plane."
        },
        "tr": {
          "name": "Mirror+",
          "summary": "Dengeli formlar, hızlı yansımalar.",
          "description": "Tek tık aynalama, kopyalı aynalama, 45° ve eksen yakalama."
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
            "sha256": "e501e117d97be7fce3a8248dacedbbf88e38925205d00fd04184b490ac35e3fd"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Simplified silhouette and object/action roles; 16/24/32 px study.",
            "sha256": "21c09843a8d77dab3cbff5317da86c7df0592595efe6e50abc3d2938ef066c99"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s15",
      "requirementId": "S15",
      "moduleId": "arqo.align",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "transform",
      "locales": {
        "en": {
          "summary": "Align objects using reference geometry."
        },
        "tr": {
          "name": "Align+",
          "summary": "Her nesne tam olması gereken yerde.",
          "description": "Seçili nesneleri hizalama."
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
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "bcde8896f07fb4575f6c13656eb789155095eca8edea92025ffd69efce0ce945"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s16",
      "requirementId": "S16",
      "moduleId": "arqo.reference_scale",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "transform",
      "locales": {
        "en": {
          "summary": "Scale objects against a reference dimension."
        },
        "tr": {
          "name": "Reference Scale",
          "summary": "Ölçeği referans noktaların belirlesin.",
          "description": "Kenar, yüzey, grup ve bileşen için referans noktalarıyla ölçekleme."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "0bb0f8e955e923a039f9b0d6adc9d80f5e55d188f8b72212564121ef9e2eb0ac"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s17",
      "requirementId": "S17",
      "moduleId": "arqo.axis_length_scale",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "transform",
      "locales": {
        "en": {
          "summary": "Scale objects along an axis or to a target length."
        },
        "tr": {
          "name": "Axis / Length Scale",
          "summary": "Eksen ve hedef uzunlukla ölçekle.",
          "description": "X/Y/Z ölçekleme, push/pull mesafesi, sabit uzunluk ve ölçeği sıfırlama."
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
        "geometry"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "eba5c26945e227603234300ef4a21783dd8430ef8fd080ccaeac77d955bc62f8"
          }
        ]
      },
      "baselineCapabilities": [
        "Group/component için X/Y/Z ölçek veya push/pull mesafesi; sabit uzunluk ve ölçeği sıfırlama."
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s18",
      "requirementId": "S18",
      "moduleId": "arqo.scale_definition",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "transform",
      "locales": {
        "en": {
          "summary": "Normalize component definition scale."
        },
        "tr": {
          "name": "Scale Definition",
          "summary": "Bileşen ölçeğini tanımında düzenle.",
          "description": "Grup ve bileşen tanımının ölçeğini düzenleme; sağ tık erişimi."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "09dfe8e1be30368c8b1d0de0f890c2c6b71754eec5b80b867d90d855408dba0e"
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
        }
      ]
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
          "summary": "Transform objects using controlled move, rotate and scale inputs."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "4a8e1d7e91b819c5c98595f2a6aec08afb1d01035ba850c7a3fb2771d5dbc8dc"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s20",
      "requirementId": "S20",
      "moduleId": "arqo.reset_axis",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "transform",
      "locales": {
        "en": {
          "summary": "Reset object axes while preserving geometry placement."
        },
        "tr": {
          "name": "Reset Axis+",
          "summary": "Nesnelerin için doğru başlangıç.",
          "description": "Orijin/eksen sıfırlama; X eksenini yakın, uzun veya kısa kenara uydurma."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "10be575768166e87a65b4af7048b83ab322ce647db395e4147d506d0dcaad4bf"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s21",
      "requirementId": "S21",
      "moduleId": "arqo.smart_slice",
      "host": "sketchup",
      "version": "0.1.1",
      "implementationStatus": "planned",
      "category": "cut",
      "locales": {
        "en": {
          "summary": "Slice geometry using a reference cutting plane."
        },
        "tr": {
          "name": "Smart Slice",
          "summary": "Geometriye yeni bir kesit aç.",
          "description": "Kesme ve ayırma; iki/üç nokta, kenar, yüzey ve dik düzlem; kesit yüzeyi."
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
            "sha256": "a6760a3e01cb9c583756515bf0c6adfc80ba0e03bc2ad2bcd85552962edf6d09"
          },
          {
            "revision": 2,
            "file": "icons/v2.svg",
            "note": "Simplified silhouette and object/action roles; 16/24/32 px study.",
            "sha256": "0a620e7b8fa4a2d6e469d6521804889e4e2eeb1c7146764c697babe6d5cd5b89"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s22",
      "requirementId": "S22",
      "moduleId": "arqo.multi_slice",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "cut",
      "locales": {
        "en": {
          "summary": "Apply multiple cutting planes to geometry."
        },
        "tr": {
          "name": "Multi Slice",
          "summary": "Birden çok nesnede tutarlı kesimler.",
          "description": "Seçili nesnelerde toplu Slice, Cut ve Detach işlemleri."
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
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "bdd5adc9412aec82e76d722007b1674f547be5debb3de04bc1e53699851b25b8"
          }
        ]
      },
      "baselineCapabilities": [
        "Seçili nesnelerde toplu Slice/Cut/Detach."
      ],
      "acceptanceProfile": "sketchup-standard",
      "manifestPath": "tools/multi-slice/manifest.json",
      "icons": [
        {
          "revision": 1,
          "file": "icons/v1.svg",
          "sha256": "bdd5adc9412aec82e76d722007b1674f547be5debb3de04bc1e53699851b25b8",
          "strokeWidth": 1.45,
          "body": "<path d=\"m10 5 16 7v16l-16-7ZM2 12l16-7M2 19l24-12M2 26l24-12\"/>",
          "note": "Initial outline study."
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s23",
      "requirementId": "S23",
      "moduleId": "arqo.explode",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "components",
      "locales": {
        "en": {
          "summary": "Explode selected grouped geometry."
        },
        "tr": {
          "name": "Explode",
          "summary": "İç içe yapıları parçalarına ayır.",
          "description": "Grup, bileşen, eğri ve görselleri iç veya dış bağlamda patlatma."
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
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "8e448841f9435301eb08265608c5d375883a508d54de4ba0bfdf3f25966253ac"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s24",
      "requirementId": "S24",
      "moduleId": "arqo.smart_select",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "selection",
      "locales": {
        "en": {
          "summary": "Select entities using reusable type and similarity filters."
        },
        "tr": {
          "name": "Smart Select",
          "summary": "Aradığın geometriyi kolayca bul.",
          "description": "Uzunluk, alan ve diğer seçim ölçütlerine göre gelişmiş seçim."
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
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "d0d3f9732c5e0ae634e01c01630b14da305e6fb0722478fe50e78aafd8275f5e"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s25",
      "requirementId": "S25",
      "moduleId": "arqo.filter_selection",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "selection",
      "locales": {
        "en": {
          "summary": "Filter the current selection by entity properties."
        },
        "tr": {
          "name": "Filter Selection",
          "summary": "Seçimini nesne türüne göre daralt.",
          "description": "Kenar, yüzey, grup, bileşen, kılavuz, ölçü, görsel, kesit düzlemi ve metin filtreleri."
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
        "selection",
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "fb9a355a0dd46aba725ec84007b18af071b823186acc0b22ffed24b12c20d2f7"
          }
        ]
      },
      "baselineCapabilities": [
        "Edge, Face, Group, ComponentInstance, ConstructionLine/Point, Dimension, Image, SectionPlane ve Text filtreleri."
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s26",
      "requirementId": "S26",
      "moduleId": "arqo.crop_lasso_select",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "selection",
      "locales": {
        "en": {
          "summary": "Select entities using crop and lasso regions."
        },
        "tr": {
          "name": "Crop / Lasso Select",
          "summary": "Kendi sınırınla seç.",
          "description": "Lasso, polyline, daire ve dikdörtgen; seçim durumu, genişletme ve ters taraf modları."
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
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "7046648f50a0dfe00a223808bd66fec86df85d627e0440b2afe463fb33d781a2"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s27",
      "requirementId": "S27",
      "moduleId": "arqo.to_components",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "components",
      "locales": {
        "en": {
          "summary": "Convert selected geometry to component instances."
        },
        "tr": {
          "name": "To Components+",
          "summary": "Tekrar kullanılabilir parçalar oluştur.",
          "description": "Nokta, çizgi, yüzey, grup ve bileşen girdilerinden bileşen üretimi."
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
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "fdd432ef5bc0be0626052aaeb16570faf2fb8c5245deaa97af51a7ae0afc24a4"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s28",
      "requirementId": "S28",
      "moduleId": "arqo.attach_to_face",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "components",
      "locales": {
        "en": {
          "summary": "Attach selected objects to a reference face."
        },
        "tr": {
          "name": "Attach to Face",
          "summary": "Bileşenleri yüzeylerine yerleştir.",
          "description": "Seçili bileşenleri yüzeye bağlama ve yapıştırma."
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
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "d5583deab036322d4d1657ba5a24077782cd10bbc47443821855d5f9b20138c3"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s29",
      "requirementId": "S29",
      "moduleId": "arqo.copy_follow",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "components",
      "locales": {
        "en": {
          "summary": "Copy objects along a reference path."
        },
        "tr": {
          "name": "Copy Follow",
          "summary": "Düzenini takip eden kopyalar.",
          "description": "Kaynak nesneyi seçili grup/bileşenleri veya tüm bileşen kopyalarını izleyerek çoğaltma."
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
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "39ac4dcdab1f5fd9c2fa6db4a93f3a3935f7d12c36063be20ac37a7965f70407"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s30",
      "requirementId": "S30",
      "moduleId": "arqo.delete_overlap",
      "host": "sketchup",
      "version": "0.2.0",
      "implementationStatus": "in-development",
      "category": "repair",
      "locales": {
        "en": {
          "summary": "Find and remove overlapping duplicate geometry."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "16f95c095277691189121bf5a6b236c02d63d33af57b5224baa068172a731cea"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s31",
      "requirementId": "S31",
      "moduleId": "arqo.material_tools",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "materials",
      "locales": {
        "en": {
          "summary": "Manage materials on selected geometry."
        },
        "tr": {
          "name": "Material Tools",
          "summary": "Yüzey ve malzemelerin uyum içinde.",
          "description": "Ön/arka yüz malzemesi değişimi; grup ve bileşenlerin yüz yönlerini düzenleme."
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
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "5252e54ea652f5a4a9e02a8be67de528dbeac224a125e93fda640b59b5b460c9"
          }
        ]
      },
      "baselineCapabilities": [
        "Ön/arka yüz malzemesi değişimi; group/component yüz yönü araçları."
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s32",
      "requirementId": "S32",
      "moduleId": "arqo.paint",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "materials",
      "locales": {
        "en": {
          "summary": "Apply materials to selected faces and objects."
        },
        "tr": {
          "name": "Paint+",
          "summary": "Malzemelerine daha fazla kontrol.",
          "description": "İç yüzeyleri boyama, malzeme silme/değiştirme, doku döndürme/taşıma/hizalama, yüz çevirme ve alan ölçümü."
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
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "721c7b1b075ee05b8533734ff3328e75738026fb90612f48aee07f70e7708b2c"
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
        }
      ]
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
          "summary": "Build stairs from architectural input dimensions."
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
        "current": "icons/v2.svg",
        "revision": 2,
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s34",
      "requirementId": "S34",
      "moduleId": "arqo.tag_tools",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "organization",
      "locales": {
        "en": {
          "summary": "Organize entities using tags."
        },
        "tr": {
          "name": "Tag Tools",
          "summary": "Modelin düzeni elinin altında.",
          "description": "Previous, Next, Isolate, Current, Off ve On etiket/görünürlük işlemleri."
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
        "selection",
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "4de0869259077496929a397ec0aaeb4e375826a1bd87cfbc2fb341e085447a58"
          }
        ]
      },
      "baselineCapabilities": [
        "Previous, Next, Isolate, Current, Off ve On etiket/görünürlük işlemleri."
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
        }
      ]
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
          "summary": "Import DXF geometry into a controlled context."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "26050e11a79b0d6364883a76a1f919e72a7686fe76f3cf45a611ec913b472e3a"
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
        }
      ]
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
          "summary": "Import camera definitions."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "d2b9dd2c842841bea5ff505ac83ab230760a498dd3e0be1229aec5376819efb7"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s37",
      "requirementId": "S37",
      "moduleId": "arqo.export_scenes",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "presentation",
      "locales": {
        "en": {
          "summary": "Export selected scene views."
        },
        "tr": {
          "name": "Export Scenes",
          "summary": "Sahnelerin paylaşılmaya hazır olsun.",
          "description": "Sahneleri JPG/PNG dışa aktarma, sahne taşıma ve yeniden adlandırma."
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
        "selection",
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "094c55b907e697df20344e305820ed796a537b09ad4ae04bfca277739b3975da"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s38",
      "requirementId": "S38",
      "moduleId": "arqo.scene_shadows",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "presentation",
      "locales": {
        "en": {
          "summary": "Manage scene shadow settings."
        },
        "tr": {
          "name": "Scene Shadows",
          "summary": "Bütün sahnelerde tutarlı gölgeler.",
          "description": "Tüm sahnelerde gölgeyi açma ve kapatma."
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
        "selection",
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "7f07a7e761bf0ffbb61710ab23ed4701fb8ebda23e71f64bf01cfc7425dca049"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.s39",
      "requirementId": "S39",
      "moduleId": "arqo.clipping_camera",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "planned",
      "category": "presentation",
      "locales": {
        "en": {
          "summary": "Use camera-related clipping controls."
        },
        "tr": {
          "name": "Clipping Camera",
          "summary": "Kamera kesme mesafesini kontrol et.",
          "description": "FORCE/NEAR ile yakın kesme düzlemi kontrolü. Windows odaklı referans; sürüm desteği teknik doğrulama bekliyor."
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
        "objects"
      ],
      "settingsSchemaVersion": 1,
      "settings": [],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "751c425d17399e392b8537460b2520833cfd7b41993de8068b6232a4c700de45"
          }
        ]
      },
      "baselineCapabilities": [
        "FORCE/NEAR üzerinden kamera near clipping kontrolü; kaynak Windows odaklıdır."
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
        }
      ]
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
          "summary": "Draw a boundary from reference geometry."
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
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial outline study.",
            "sha256": "bbecf695e4f2f89bed7c559b0c1663461719d3eac74cdd4f53c29392eb7b6f1f"
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
        }
      ]
    },
    {
      "schemaVersion": 1,
      "id": "arqo.tool.a01",
      "requirementId": "A01",
      "moduleId": "arqo.push",
      "host": "sketchup",
      "version": "0.1.0",
      "implementationStatus": "in-development",
      "category": "geometry",
      "locales": {
        "en": {
          "summary": "Professional push/pull engine: twelve modes on one tool."
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
        }
      ],
      "icon": {
        "current": "icons/v1.svg",
        "revision": 1,
        "status": "draft",
        "history": [
          {
            "revision": 1,
            "file": "icons/v1.svg",
            "note": "Initial draft: a slab with an upward action arrow.",
            "sha256": "bccee6d284951702aabbafde610b4161d235b7825c345a7313ecc62461ded81e"
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
        }
      ]
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
