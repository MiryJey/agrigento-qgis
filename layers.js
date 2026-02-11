var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_s20_cat_acque_1 = new ol.format.GeoJSON();
var features_s20_cat_acque_1 = format_s20_cat_acque_1.readFeatures(json_s20_cat_acque_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_s20_cat_acque_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_s20_cat_acque_1.addFeatures(features_s20_cat_acque_1);
var lyr_s20_cat_acque_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_s20_cat_acque_1, 
                style: style_s20_cat_acque_1,
                popuplayertitle: 's20_cat_acque',
                interactive: true,
                title: '<img src="styles/legend/s20_cat_acque_1.png" /> s20_cat_acque'
            });
var format_chiese_agrigento_qgis1_2 = new ol.format.GeoJSON();
var features_chiese_agrigento_qgis1_2 = format_chiese_agrigento_qgis1_2.readFeatures(json_chiese_agrigento_qgis1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chiese_agrigento_qgis1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chiese_agrigento_qgis1_2.addFeatures(features_chiese_agrigento_qgis1_2);
var lyr_chiese_agrigento_qgis1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_chiese_agrigento_qgis1_2, 
                style: style_chiese_agrigento_qgis1_2,
                popuplayertitle: 'chiese_agrigento_qgis (1)',
                interactive: true,
                title: '<img src="styles/legend/chiese_agrigento_qgis1_2.png" /> chiese_agrigento_qgis (1)'
            });
var format_HabitatAgrigento_3 = new ol.format.GeoJSON();
var features_HabitatAgrigento_3 = format_HabitatAgrigento_3.readFeatures(json_HabitatAgrigento_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HabitatAgrigento_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HabitatAgrigento_3.addFeatures(features_HabitatAgrigento_3);
var lyr_HabitatAgrigento_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HabitatAgrigento_3, 
                style: style_HabitatAgrigento_3,
                popuplayertitle: 'Habitat Agrigento',
                interactive: true,
                title: '<img src="styles/legend/HabitatAgrigento_3.png" /> Habitat Agrigento'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_s20_cat_acque_1.setVisible(true);lyr_chiese_agrigento_qgis1_2.setVisible(true);lyr_HabitatAgrigento_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_s20_cat_acque_1,lyr_chiese_agrigento_qgis1_2,lyr_HabitatAgrigento_3];
lyr_s20_cat_acque_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'code_provincia': 'code_provincia', 'codecatcom': 'codecatcom', 'foglio': 'foglio', 'numero': 'numero', 'sviluppo': 'sviluppo', 'origine': 'origine', 'sezione': 'sezione', 'gis_sup_mq': 'gis_sup_mq', 'allegato': 'allegato', 'datasetdel': 'datasetdel', });
lyr_chiese_agrigento_qgis1_2.set('fieldAliases', {'qc_id': 'qc_id', 'id_scheda': 'id_scheda', 'id_cei': 'id_cei', 'diocesi': 'diocesi', 'ogtd': 'ogtd', 'ogtq': 'ogtq', 'pvcr': 'pvcr', 'pvcp': 'pvcp', 'pvcc': 'pvcc', 'pvci': 'pvci', 'denom_principale': 'denom_principale', 'lat_dd': 'lat_dd', 'lon_dd': 'lon_dd', });
lyr_HabitatAgrigento_3.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'habitat': 'habitat', 'legenda_ha': 'legenda_ha', 'codice': 'codice', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_s20_cat_acque_1.set('fieldImages', {'qc_id': '', 'id': '', 'code_provincia': '', 'codecatcom': '', 'foglio': '', 'numero': '', 'sviluppo': '', 'origine': '', 'sezione': '', 'gis_sup_mq': '', 'allegato': '', 'datasetdel': '', });
lyr_chiese_agrigento_qgis1_2.set('fieldImages', {'qc_id': '', 'id_scheda': '', 'id_cei': '', 'diocesi': '', 'ogtd': '', 'ogtq': '', 'pvcr': '', 'pvcp': '', 'pvcc': '', 'pvci': '', 'denom_principale': '', 'lat_dd': '', 'lon_dd': '', });
lyr_HabitatAgrigento_3.set('fieldImages', {'qc_id': '', 'objectid': '', 'habitat': '', 'legenda_ha': '', 'codice': '', 'shape_leng': '', 'shape_area': '', });
lyr_s20_cat_acque_1.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'code_provincia': 'no label', 'codecatcom': 'no label', 'foglio': 'no label', 'numero': 'no label', 'sviluppo': 'no label', 'origine': 'no label', 'sezione': 'no label', 'gis_sup_mq': 'no label', 'allegato': 'no label', 'datasetdel': 'no label', });
lyr_chiese_agrigento_qgis1_2.set('fieldLabels', {'qc_id': 'no label', 'id_scheda': 'no label', 'id_cei': 'no label', 'diocesi': 'no label', 'ogtd': 'no label', 'ogtq': 'no label', 'pvcr': 'no label', 'pvcp': 'no label', 'pvcc': 'no label', 'pvci': 'no label', 'denom_principale': 'no label', 'lat_dd': 'no label', 'lon_dd': 'no label', });
lyr_HabitatAgrigento_3.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'habitat': 'no label', 'legenda_ha': 'no label', 'codice': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_HabitatAgrigento_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});