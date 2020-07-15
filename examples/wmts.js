/**
 * @module examples.wmts
 */
import OLCesium from 'olcs/OLCesium.js';

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MzAyNzUyYi0zY2QxLTQxZDItODRkOS1hNTA3MDU3ZTBiMDUiLCJpZCI6MjU0MSwiaWF0IjoxNTMzNjI1MTYwfQ.oHn1SUWJa12esu7XUUtEoc1BbEbuZpRocLetw6M6_AA';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {getWidth, getTopLeft} from 'ol/extent.js';
import TileLayer from 'ol/layer/Tile.js';
import {get as getProjection} from 'ol/proj.js';
import OSM from 'ol/source/OSM.js';
import WMTS from 'ol/source/WMTS.js';
import WMTSTileGrid from 'ol/tilegrid/WMTS.js';
import {register as olProj4Register} from 'ol/proj/proj4.js';
import proj4 from 'proj4';
import { createFromCapabilitiesMatrixSet } from 'ol/tilegrid/WMTS';
import { transformExtent } from 'ol/proj';

const data = {
  "url": "http://geoportal.cuzk.cz/WMTS_ORTOFOTO/WMTService.aspx",
  "layer": "orto",
  "style": "default",
  "format": "image/png",
  "matrixSet": "jtsk:ferro:epsg:5221",
  "projection": "EPSG:5221",
  "tileMatrixSet": {
    "Identifier": "jtsk:ferro:epsg:5221",
    "SupportedCRS": "EPSG:5221",
    "TileMatrix": [
      {
        "Identifier": "0",
        "ScaleDenominator": 7315200,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 1,
        "MatrixHeight": 1
      },
      {
        "Identifier": "1",
        "ScaleDenominator": 3657600,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 2,
        "MatrixHeight": 2
      },
      {
        "Identifier": "2",
        "ScaleDenominator": 1828800,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 4,
        "MatrixHeight": 4
      },
      {
        "Identifier": "3",
        "ScaleDenominator": 914400,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 8,
        "MatrixHeight": 8
      },
      {
        "Identifier": "4",
        "ScaleDenominator": 457200,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 16,
        "MatrixHeight": 16
      },
      {
        "Identifier": "5",
        "ScaleDenominator": 228600,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 32,
        "MatrixHeight": 32
      },
      {
        "Identifier": "6",
        "ScaleDenominator": 114300,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 64,
        "MatrixHeight": 64
      },
      {
        "Identifier": "7",
        "ScaleDenominator": 57150,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 128,
        "MatrixHeight": 128
      },
      {
        "Identifier": "8",
        "ScaleDenominator": 28575,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 256,
        "MatrixHeight": 256
      },
      {
        "Identifier": "9",
        "ScaleDenominator": 14287.5,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 512,
        "MatrixHeight": 512
      },
      {
        "Identifier": "10",
        "ScaleDenominator": 7143.75,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 1024,
        "MatrixHeight": 1024
      },
      {
        "Identifier": "11",
        "ScaleDenominator": 3571.875,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 2048,
        "MatrixHeight": 2048
      },
      {
        "Identifier": "12",
        "ScaleDenominator": 1785.9375,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 4096,
        "MatrixHeight": 4096
      },
      {
        "Identifier": "13",
        "ScaleDenominator": 892.96875,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 8192,
        "MatrixHeight": 8192
      },
      {
        "Identifier": "14",
        "ScaleDenominator": 446.484375,
        "TopLeftCorner": [
          -925000,
          -920000
        ],
        "TileWidth": 256,
        "TileHeight": 256,
        "MatrixWidth": 16384,
        "MatrixHeight": 16384
      }
    ]
  },
  "worldExtent": [
    11.928965297346,
    48.226242129502,
    18.979531020281,
    51.366356814238
  ],
  "requestEncoding": "KVP",
  "urls": [
    "http://geoportal-orto.cuzk.cz/WMTS_ORTOFOTO/service.svc/get?",
    "http://geoportal-orto.cuzk.cz/WMTS_ORTOFOTO/service.svc/get/pl?"
  ],
  "extent": [
    -954092.1531845224,
    -1219823.7875031594,
    -407649.5129776918,
    -935748.4355409506
  ]
};

const epsgdef = '+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +pm=ferro +units=m +no_defs';

proj4.defs('EPSG:5221', epsgdef);

olProj4Register(proj4);
getProjection('EPSG:5221').setExtent(data.extent);

const projection = getProjection('EPSG:5221');

const wmtsLayer =   new TileLayer({
  source: new WMTS({
    ...data,
    tileGrid: createFromCapabilitiesMatrixSet(data.tileMatrixSet, data.extent)
  })
});

const extent = transformExtent(data.worldExtent, 'EPSG:4326', 'EPSG:3857');
wmtsLayer.setExtent(extent);

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
      opacity: 0.7
    }),
    wmtsLayer
  ],
  target: 'map',
  view: new View({
    center: [1748689.74, 6526278.33],
    zoom: 5
  })
});

const ol2d = map;
const ol3d = new OLCesium({
  map: ol2d,
});
ol3d.setEnabled(false);

document.getElementById('enable').addEventListener('click', () => ol3d.setEnabled(!ol3d.getEnabled()));
