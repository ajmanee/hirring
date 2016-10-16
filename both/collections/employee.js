/**
 * Created by ali on 10/15/16.
 */
Employee = new Mongo.Collection("employee");
Employee.attachSchema(new SimpleSchema ({

    name: {
        type: String,
        label: "الاسم",
        max: 150
    },
    dob: {
        type: Date,
        label: "تاريخ الميلاد",
        optional: true,
        autoform: {
            afFieldInput: {
                type: "bootstrap-datepicker"
            }
        }
    },

    birthPlace: {
        type: String,
        label: "مكان الميلاد",
            optional: true,
            autoform: {
            type: "typeahead",
                options: function () {
                return [
                    {label: "عجمان", value: "عجمان"},
                    {label: "دبي", value:"دبي"},
                    {label: "ابوظبي", value: "ابوظبي"}
                ];
            }
        }
    },

    educationLevel: {
        type: String,
        label: "المحصل العلمي",
        allowedValues: ['High School', 'Diploma', 'Bachelor'],
        autoform: {
            options: [
                {label: "High School", value: "High School"},
                {label: "Diploma", value: "Diploma"},
                {label: "Bachelor", value: "Bachelor"}
            ]
        }
    },
    addres: {
        type: String,
        label: "العنوان",
        max: 250,
        optional: true
    },
    phone: {
        type: Number,
        label: "رقم الهاتف المتحرك",
        min: 10
    },
    contacts: {
        type: Array,
        label: "الاقارب",
        optional: true
    },
    'contacts.$': {
        type: Object
    },
    'contacts.$.name': {
        type: String,
        label: "الاسم"
    },
    'contacts.$.relation': {
        type: String,
        label: "صلة القرابه",
        allowedValues: ['family', 'friend'],
        autoform: {
            options: [
                {label: "من العائلة", value: "family"},
                {label: "من الاصدقاء", value: "friend"}
            ]
        }
    },
    'contacts.$.phone': {
        type: Number,
        label: "رقم الهاتف",
        min: 10
    }

}));


Files = new FS.Collection("files", {
    stores: [new FS.Store.GridFS("filesStore")]
});

Files.allow({
    download: function () {
        return true;
    },
    fetch: null
});