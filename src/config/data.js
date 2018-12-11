import {
    COLORS
} from './style';

const DEVICES = {
    iOS: {
        name: 'iOS',
        icon: 'https://www.litmos.com/wp-content/uploads/2016/01/apple-icon.png'
    },
    android: {
        name: 'Android',
        icon: 'https://www.materialui.co/materialIcons/action/android_grey_192x192.png'
    },
};

const PRODUCTS = {
    LYDIACARD: {
        name: 'Lydia Card',
        key: "LYDIACARD",
        icon: '/img/card_lydia.png'
    },
    PREMIUM: {
        key: "PREMIUM",
        name: 'Premium',
        icon: '/img/premium.png'
    },
    PRO: {
        key: "PRO",
        name: 'Lydia Pro',
        icon: '/img/pro.png'
    },
    CAGNOTTE: {
        key: "CAGNOTTE",
        name: 'Cagnotte',
        icon: '/img/cagnotte.png'
    },
};

const DEFAULT_PIC = "https://png.pngtree.com/svg/20160308/_user_profile_icon_1108089.png";

const SECURITY_LEVELS = {
    GOOD: {
        label: "Good",
        key: 'GOOD',
        color: COLORS.GOOD,
        level: 1
    },
    WARNING: {
        label: "Warning",
        key: 'WARNING',
        color: COLORS.WARNING,
        level: 0
    },
    CHECKED: {
        label: "Checked",
        key: 'CHECKED',
        color: COLORS.WARNING,
        level: 1
    }
}
const SECURITY_THRESHOLDS = {
    exchangedFactor: 2,
    mainActivity: {
        volumeExchangedFactor: 50,
        CBUsage: 70,
        averageTime: 3600 * 60,
        nbTransations: 30
    }
}

const users = {
    14: {
        index: 14,
        name: "Marcel Pasquier",
        picture: '',
        verified: true,
    },
    18: {
        index: 18,
        name: "Alexandre Carle",
        picture: '',
        verified: true,
    },
    21: {
        index: 21,
        name: "André Sarte",
        picture: '',
        verified: true,
    },
    12: {
        index: 12,
        name: 'Maxime Dupont',
        picture: '',
        verified: true,
        lydiaBalance: {
            current: 114.56,
            max: 250
        },
        lydiaAccounts: {
            current: 236.68,
            max: 1230
        },
        exchanged: {
            lastThreeMonths: 10650.50,
            meanThreeMonths: 4530,
            maxThreeMonths: 12000,
            maxPerUser: 4000
        },
        products: [
            PRODUCTS.LYDIACARD.key,
            // PRODUCTS.PREMIUM.key,
            PRODUCTS.PRO.key,
            PRODUCTS.CAGNOTTE.key,
        ],
        environment: {
            version: 6.8,
            updated: false,
            device: DEVICES.iOS,
        },
        mainActivity: {
            14: {
                volumeExchanged: 3870.56,
                nbTransations: 165,
                CBUsage: 12,
                averageTime: 259200
            },
            18: {
                volumeExchanged: 632.02,
                nbTransations: 54,
                CBUsage: 76,
                averageTime: 864000
            },
            21: {
                volumeExchanged: 4641.98,
                nbTransations: 12,
                CBUsage: 42,
                averageTime: 18000
            }
        }
    },
};


const getUserData = (userIndex, data) => (
    doesUserExist(userIndex) && users[userIndex][data]
)

const doesUserExist = (userIndex) => (
    users[userIndex]
)

// GET USER INFORMATION
export const getUserName = (userIndex) => (
    getUserData(userIndex, "name")
);
export const isUserVerified = (userIndex) => (
    getUserData(userIndex, "verified")
);
export const getUserPic = userIndex => (
    getUserData(userIndex, "picture") || DEFAULT_PIC
);

export const getUserProducts = userIndex => (
    Object.keys(PRODUCTS).map(productKey => ({
        url: PRODUCTS[productKey].icon,
        active: getUserData(userIndex, 'products').indexOf(productKey) > -1
    }))
)
export const getLydiaBalance = (userIndex) => ({
    value: getUserData(userIndex, "lydiaBalance").current,
    total: getUserData(userIndex, "lydiaBalance").max,
    securityColor: SECURITY_LEVELS.GOOD.color
});
export const getAllAcountsBalance = (userIndex) => ({
    value: getUserData(userIndex, "lydiaAccounts").current,
    total: getUserData(userIndex, "lydiaAccounts").max,
    securityColor: SECURITY_LEVELS.GOOD.color
});
export const getExchangedBalance = (userIndex) => ({
    value: getUserData(userIndex, "exchanged").lastThreeMonths,
    total: getUserData(userIndex, "exchanged").maxThreeMonths,
    securityColor: getUserData(userIndex, "exchanged").lastThreeMonths > SECURITY_THRESHOLDS.exchangedFactor * getUserData(userIndex, "exchanged").meanThreeMonths ? SECURITY_LEVELS.WARNING.color : SECURITY_LEVELS.GOOD.color
});

// GET DEVICE INFORMATION
export const getOSIcon = (userIndex) => (
    getUserData(userIndex, "environment").device.icon
);
export const getAppVersion = (userIndex) => (
    getUserData(userIndex, "environment").version
);
export const isAppUpdated = (userIndex) => (
    getUserData(userIndex, "environment").update
);


// GET MAIN ACTIVITY
export const getUsersFromMainActivity = (userIndex) => (
    doesUserExist(userIndex) && Object.keys(getUserData(userIndex, 'mainActivity'))
);

export const getVolumeExchanged = (user1, user2) => ({
    value: getUserData(user1, 'mainActivity')[user2].volumeExchanged,
    total: getUserData(user1, 'exchanged').maxPerUser,
    securityColor: SECURITY_LEVELS.GOOD.color
})

export const getTransactions = (user1, user2) => ({
    value: getUserData(user1, 'mainActivity')[user2].nbTransations,
    total: getUserData(user1, 'exchanged').maxPerUser,
    securityColor: getUserData(user1, 'mainActivity')[user2].nbTransations > SECURITY_THRESHOLDS.mainActivity.nbTransations ? SECURITY_LEVELS.WARNING.color : SECURITY_LEVELS.GOOD.color
})
export const getCBUsage = (user1, user2) => ({
    value: getUserData(user1, 'mainActivity')[user2].CBUsage,
    total: getUserData(user1, 'exchanged').maxPerUser,
    securityColor: SECURITY_LEVELS.GOOD.color
})
export const getAverageTime = (user1, user2) => ({
    value: getUserData(user1, 'mainActivity')[user2].averageTime,
    total: getUserData(user1, 'exchanged').maxPerUser,
    securityColor: getUserData(user1, 'mainActivity')[user2].averageTime < SECURITY_THRESHOLDS.mainActivity.averageTime ? SECURITY_LEVELS.WARNING.color : SECURITY_LEVELS.GOOD.color
})

export const getSecurityReward = (user1, user2) => genRand(0, 5, 1)

const genRand = (min, max, decimalPlaces) => {
    var rand = Math.random() * (max - min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
}