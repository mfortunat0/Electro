"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllPost = exports.CreatePost = void 0;
var client_1 = require("@prisma/client");
var fs_1 = __importDefault(require("fs"));
var prisma = new client_1.PrismaClient();
var create = function (title, description, company, value, userId, userName) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.oferts.create({
                    data: {
                        company: company,
                        description: description,
                        title: title,
                        value: Number(value),
                        username: userName,
                        userid: userId,
                    },
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var findAll = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.oferts.findMany({
                    orderBy: [
                        {
                            id: "desc",
                        },
                    ],
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var CreatePost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, title, description, company, value, userId, userName, post;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, title = _a.title, description = _a.description, company = _a.company, value = _a.value, userId = _a.userId, userName = _a.userName;
                if (!req.file) return [3 /*break*/, 2];
                return [4 /*yield*/, create(title, description, company, value, userId, userName)
                        .catch(function (error) { return console.error(error); })
                        .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, prisma.$disconnect()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                post = _b.sent();
                fs_1.default.renameSync("./uploads/photo/post/" + req.file.filename, "./uploads/photo/post/" + (post === null || post === void 0 ? void 0 : post.id) + ".jpg");
                res.json(post);
                _b.label = 2;
            case 2:
                res.json().status(404);
                return [2 /*return*/];
        }
    });
}); };
exports.CreatePost = CreatePost;
var FindAllPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var posts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, findAll()];
            case 1:
                posts = _a.sent();
                res.send(posts);
                return [2 /*return*/];
        }
    });
}); };
exports.FindAllPost = FindAllPost;
