var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1 = new ol.format.GeoJSON();
var features_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1 = format_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1.readFeatures(json_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1.addFeatures(features_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1);
var lyr_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1, 
                style: style_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1,
                interactive: true,
                title: '<img src="styles/legend/LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1.png" /> [LapakGIS.com] KOTA KEDIRI — ADMINISTRASIDESA_AR_25K.shp'
            });
var format_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2 = new ol.format.GeoJSON();
var features_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2 = format_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2.readFeatures(json_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2.addFeatures(features_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2);
var lyr_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2, 
                style: style_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2,
                interactive: true,
                title: '<img src="styles/legend/LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2.png" /> [LapakGIS.com] KOTA KEDIRI — JALAN_LN_25K.shp'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1.setVisible(true);lyr_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1,lyr_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2];
lyr_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_LapakGIScomKOTAKEDIRIADMINISTRASIDESA_AR_25Kshp_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LapakGIScomKOTAKEDIRIJALAN_LN_25Kshp_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});